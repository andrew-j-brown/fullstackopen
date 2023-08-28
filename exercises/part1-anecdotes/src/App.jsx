import { useState } from "react";

const Button = (props) => {
  const { onClick, text } = props;
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const nextAnecdote = () => {
    if (selected < anecdotes.length - 1) {
      setSelected(selected + 1);
    } else {
      setSelected(0);
    }
  };

  const addPoint = () => {
    const updatedPoints = [...points];
    updatedPoints[selected] += 1;
    setPoints(updatedPoints);
  };

  const mostPoints = (arr) => {
    let maxIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[maxIndex]) {
        maxIndex = i;
      }
    }

    return maxIndex;
  };

  return (
    <>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button onClick={nextAnecdote} text="Next Anecdote" />
      <Button onClick={addPoint} text="Add Point" />
      <h2>Below, the best Anecdote!</h2>
      <h3>...so far</h3>
      <p>{anecdotes[mostPoints(points)]}</p>
      <p>with {points[mostPoints(points)]} votes :3</p>
    </>
  );
};

export default App;
