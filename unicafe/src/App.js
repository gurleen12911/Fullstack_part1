import React, { useState } from 'react';

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all || 0;
  const positive = (good / all) * 100 || 0;

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={all} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={`${positive}%`} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (feedbackType) => {
    if (feedbackType === 'good') {
      setGood(good + 1);
    } else if (feedbackType === 'neutral') {
      setNeutral(neutral + 1);
    } else if (feedbackType === 'bad') {
      setBad(bad + 1);
    }
  };

  const hasFeedback = good + neutral + bad > 0;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => handleFeedback('good')} text="Good" />
      <Button handleClick={() => handleFeedback('neutral')} text="Neutral" />
      <Button handleClick={() => handleFeedback('bad')} text="Bad" />

      {hasFeedback ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
