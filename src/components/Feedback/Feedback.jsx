import './Feedback.module.css';
const Feedback = ({ values, total, positive }) => {
  return (
    <div>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
      <p>Bad: {values.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
};
export default Feedback;