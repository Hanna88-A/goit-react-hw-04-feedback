import {useState} from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./NotificationTitle/NotificationTitle";

const options = ['good', 'neutral', 'bad']
export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const currentFeedback = (feedback) => {
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1)
        break;
      default:
        return
    }
  };

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  }
  const countPositiveFeedbackPercentage = () => {
    const positiveFeedback = Math.round(good * 100 / countTotalFeedback());
    return positiveFeedback || 0;
  };
  
    return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={currentFeedback} />
        {countTotalFeedback() > 0 ? (
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
          />
          ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
      
  );
}

