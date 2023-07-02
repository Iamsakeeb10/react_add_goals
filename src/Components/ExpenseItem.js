import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const deleteItems = () => {
    props.onDelete(props.id);
  };

  return (
    <div>
      <div onClick={deleteItems} className="goal-item">
        {props.text}
      </div>
    </div>
  );
};

export default ExpenseItem;
