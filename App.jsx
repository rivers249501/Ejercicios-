// eslint-disable-next-line no-unused-vars
import React from "react"

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
      <Part key={index} part={part} />
      ))}
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercise}
    </p>
  );
};

const Total = ({ parts }) => {
  // eslint-disable-next-line react/prop-types
  const total = parts.reduce((sum, part) => sum + part.exercise, 0);
  return <p>Total exercises: {total}</p>;
};


const App = () => {
  const course ={
      name: 'Half stack application development',
      parts: [
    {
      name: 'Fundamentals of React',
      exercise: 10
    },
    {
      name: 'Using props to pass data',
      exercise: 7
   },
   {
      name: 'State of a component',
      exercise: 14
   }
  ]
} 

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App

