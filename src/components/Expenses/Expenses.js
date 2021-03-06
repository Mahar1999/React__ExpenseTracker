import React, { useState } from 'react';

import './Expenses.css';

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  };

  const filterExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filterExpenses} />
        <ExpensesList items={filterExpenses} />
        {/* <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        /> */}
      </Card>
    </div>
  );
}

export default Expenses;
