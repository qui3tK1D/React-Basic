import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = function (expenseData) {
    const newExpense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpense);
  };

  const stopEditingHandler = function () {
    setIsEditing(false);
  };

  const startEditingHandler = function () {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button className="showFormBtn" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
