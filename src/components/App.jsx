import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import {
  countTotalFeedback,
  countPositiveFeedbackPercentage,
} from '../utils/feedback-count';

export function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackClick = e => {
    const { nodeName, textContent } = e.target;

    if (nodeName !== 'BUTTON') {
      return;
    }

    setFeedback(prevState => {
      return {
        ...prevState,
        [textContent.toLowerCase()]: prevState[textContent.toLowerCase()] + 1,
      };
    });
  };

  const { good, neutral, bad } = feedback;
  const options = Object.keys(feedback);
  const total = countTotalFeedback(feedback);
  const positivePercentage = countPositiveFeedbackPercentage(good, total);

  return (
    <div className="Statistics">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleFeedbackClick}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </div>
  );
}
