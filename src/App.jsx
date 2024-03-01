import { useState, useEffect } from "react";
import "./App.css";
import Feedback from "./components/feedbackComponent/Feedback";
import Options from "./components/optionsComponent/Options";
import Notification from "./components/notificationComponent/Notification";
import Description from "./components/descriptionComponent/Description";

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const stringifiedFeedbacks = localStorage.getItem("feedbacks");
    if (!stringifiedFeedbacks) return { good: 0, neutral: 0, bad: 0 };

    const parsedFeedbacks = JSON.parse(stringifiedFeedbacks);
    return parsedFeedbacks;
  });

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);
  const updateFeedback = (feedbackType) => {
    setFeedbacks((prevFeedbacks) => ({
      ...prevFeedbacks,
      [feedbackType]: prevFeedbacks[feedbackType] + 1,
    }));
  };
  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const [showFeedback, setshowFeedback] = useState(true);
  const handleToggleShowFeedback = () => {
    setshowFeedback((prevState) => !prevState);
  };
  const handleResetFeedback = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <div>
      <Description />
      <Options
        onClick={updateFeedback}
        handleToggleShowFeedback={handleToggleShowFeedback}
        handleResetFeedback={handleResetFeedback}
        good={feedbacks.good}
        neutral={feedbacks.neutral}
        bad={feedbacks.bad}
        totalFeedback={totalFeedback}
      />
      {showFeedback && totalFeedback > 0 ? (
        <Feedback
          good={feedbacks.good}
          neutral={feedbacks.neutral}
          bad={feedbacks.bad}
          totalFeedback={totalFeedback}
          positive={feedbacks.positive}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
export default App;
