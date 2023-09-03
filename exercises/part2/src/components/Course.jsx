import { useState } from "react";

export default function Course({ course }) {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </>
  );
}

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Content = ({ parts }) => {
  const totalExercises = parts.reduce((accumulator, currentPart) => {
    return accumulator + currentPart.exercises;
  }, 0);

  return (
    <>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}

      <p>Total exercises: {totalExercises}</p>
    </>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};
