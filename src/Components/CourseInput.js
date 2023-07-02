import React, { useState } from "react";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredInput, setInput] = useState("");
  const [isValid, setIsvalid] = useState(true);

  const inputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsvalid(true);
    }
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      text: enteredInput,
      id: Math.random().toString(),
    };

    if (enteredInput.trim().length === 0) {
      setIsvalid(false);
      return;
    }

    props.onAddExpense(enteredData);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${!isValid && "invalid"}`}>
        <label>Course Goal</label>
        <input value={enteredInput} onChange={inputChangeHandler} type="text" />
      </div>
      <button className="button" type="submit">
        Add Goal
      </button>
    </form>
  );
};

export default CourseInput;
