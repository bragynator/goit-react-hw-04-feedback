export const countTotalFeedback = feedback =>
  Object.values(feedback).reduce((acc, el) => acc + el);

export const countPositiveFeedbackPercentage = (good, total) =>
  Math.round((good / total) * 100);
