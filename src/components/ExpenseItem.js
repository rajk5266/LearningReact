import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date();
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;
  const expenseLocation = 'McD'

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString().slice(0,10)}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <h3>{expenseLocation}</h3>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
      <div>03/08/2023</div>
      <div className="expense-item__description">
        <h2>Fuel</h2>
        <div className="expense-item__price">500</div>
      </div>
      <div>08/08/2023</div>
      <div className="expense-item__description">
        <h2>Movies</h2>
        <div className="expense-item__price">200</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
