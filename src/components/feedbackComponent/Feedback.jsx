const Feedback = ({ good, neutral, bad, totalFeedback }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>
        Positive:
        {Math.round(((good + neutral) / totalFeedback) * 100)}%
      </p>
    </>
  );
};

export default Feedback;
