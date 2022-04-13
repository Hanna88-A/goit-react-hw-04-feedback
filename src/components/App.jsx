import {Component} from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./NotificationTitle/NotificationTitle";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  currentfeedback = (feedback) => {
    this.setState((prevState) => ({
      [feedback]: prevState[feedback] +1
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  }
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positiveFeedback = Math.round(good * 100 / this.countTotalFeedback());
    return positiveFeedback || 0;
  };
  
  render() {
    
    const { good, neutral, bad } = this.state;
  
    const buttonsName = Object.keys(this.state);
  
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={buttonsName} onLeaveFeedback={this.currentfeedback} />
          {this.countTotalFeedback() > 0 ? (
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            />
           ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
      
    );
  }
};
