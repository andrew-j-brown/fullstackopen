import { useState } from "react";

const Button = (props) => {
  const { onClick, text } = props;
  return <button onClick={props.onClick}>{props.text}</button>;
};

const StatisticLine = (props) => {
  const { text, value } = props;
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad, total } = props;

  let average = good / (good + bad);
  average = average.toFixed(2);

  let percent = (good / total) * 100;
  percent = percent.toFixed(2);

  if (total === 0) {
    return <p>No feedback given!</p>;
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text={"good "} value={good} />
          <StatisticLine text={"neutral "} value={neutral} />
          <StatisticLine text={"bad "} value={bad} />
          <StatisticLine text={"total "} value={total} />
          <StatisticLine text={"average "} value={average} />
          <StatisticLine text={"positive "} value={percent} />
        </tbody>
      </table>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

export default App;
