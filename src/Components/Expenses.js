import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          text={expense.text}
          id={expense.id}
          onDelete={props.onDeleteItems}
        />
      ))}
    </div>
  );
};

export default Expenses;
