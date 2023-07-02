import React, { useState } from "react";
import "./App.css";
import CourseInput from "./Components/CourseInput";
import Expenses from "./Components/Expenses";

const DUMMY__EXPENSES = [
  {
    text: "Do All Exercises!",
    id: "G1",
  },
  {
    text: "Finish The Course!",
    id: "G2",
  },
];

const App = () => {
  const [expense, setExpense] = useState(DUMMY__EXPENSES);

  const saveExpenseData = (enteredExpenseData) => {
    setExpense((prevExpese) => {
      return [enteredExpenseData, ...prevExpese];
    });
  };

  const deleteHandler = (goalId) => {
    setExpense((prevId) => {
      const filterId = prevId.filter((items) => items.id !== goalId);
      return filterId;
    });
  };

  let content = <p id="text">No Goals Found. Maybe add one?</p>;

  if (expense.length > 0) {
    content = <Expenses items={expense} onDeleteItems={deleteHandler} />;
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddExpense={saveExpenseData} />
      </section>
      {content}
    </div>
  );
};

export default App;
