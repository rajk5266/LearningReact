import ExpenseDate from  './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card  from '../UI/Card';
import './ExpenseItem.css'
import React, { useState} from 'react'
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
      setTitle('new Title');
      
  }
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
      <ExpenseDetails title={title} amount={props.amount}/>
        <h3>{props.location}</h3>
      </div>
      <button onClick={clickHandler} >Edit</button>
      <button  >Delete</button>
    </Card>
  );
}

export default ExpenseItem;
