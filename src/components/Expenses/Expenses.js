import "./Expenses.css";
import ExpenseItem from "./ExpenseItems";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import { useState } from "react";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = function (selectedYear) {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.items.filter(
    (cur) => cur.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpensesChart expenses={filterExpenses} />

      {filterExpenses.length === 0 && (
        <p className="expenses_empty">No Expenses Here!</p>
      )}
      {filterExpenses.length > 0 &&
        filterExpenses.map((cur) => (
          <ExpenseItem
            date={cur.date}
            amount={cur.amount}
            title={cur.title}
            key={cur.id}
          />
        ))}
    </Card>
  );
}

export default Expenses;
