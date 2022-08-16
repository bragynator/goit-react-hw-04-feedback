import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import {
  countTotalFeedback,
  countPositiveFeedbackPercentage,
} from '../utils/feedback-count';

export function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const handleFeedbackClick = e => {
    const { textContent } = e.target;

    switch (textContent) {
      case 'Good':
        setGoodFeedback(prevState => (prevState += 1));
        break;

      case 'Neutral':
        setNeutralFeedback(prevState => (prevState += 1));
        break;

      case 'Bad':
        setBadFeedback(prevState => (prevState += 1));
        break;

      default:
        return;
    }
  };

  const feedback = {
    good: goodFeedback,
    neutral: neutralFeedback,
    bad: badFeedback,
  };
  const options = Object.keys(feedback);
  const total = countTotalFeedback(feedback);
  const positivePercentage = countPositiveFeedbackPercentage(
    goodFeedback,
    total
  );

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
          good={goodFeedback}
          neutral={neutralFeedback}
          bad={badFeedback}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </div>
  );
}
