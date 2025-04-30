import { useState, useEffect } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

const initialFeedback = JSON.parse(localStorage.getItem("feedback")) || {
  good: 0,
  neutral: 0,
  bad: 0,
};

  const App = () => {
  const [feedback, setFeedback] = useState(initialFeedback);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const handleFeedback = (type) => {
    setFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const handleReset = () => {
    const reset = { good: 0, neutral: 0, bad: 0 };
    setFeedback(reset);
    localStorage.setItem("feedback", JSON.stringify(reset));
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive = total ? Math.round((feedback.good / total) * 100) : 0;

  return (
    <div>
      <Description />
      <Options onLeaveFeedback={handleFeedback} onReset={handleReset} />
      <Feedback values={feedback} total={total} positive={positive} />
    </div>
  );
};


export default App;
