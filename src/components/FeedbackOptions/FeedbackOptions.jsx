import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul onClick={onLeaveFeedback}>
      {options.map((el, idx) => (
        <li key={idx}>
          <button type="button">{el[0].toUpperCase() + el.slice(1)}</button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
