import React,{ useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
 const [amount,setTitle]= useState(props.amount);
 
  
  const clickHandler=()=>{
    setTitle('updated');
    console.log(amount);
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}> Delete Expense</button>
    </Card>
  );
};
export default ExpenseItem;
