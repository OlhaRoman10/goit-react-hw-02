import { useState, useEffect } from 'react';
import './App.module.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

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

  const updateFeedback = (type) => {
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
      <Options
        onLeaveFeedback={updateFeedback}
        onReset={handleReset}
        hasFeedback={total > 0}
      />
      {total > 0 ? (
<Feedback values={feedback} total={total} positive={positive} />
      ) : (
          <Notification message="No feedback yet" />
      )}
      
    </div>
  );
};


export default App;
