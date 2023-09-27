import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const month = props.date.getMonth();
    const day = props.date.getDate();
    const year = props.date.getFullYear()

    return <div className='date-section'>
        <div className='expense-day'>{day}</div>
        <div className='expense-month'>{month}</div>
        <div className='expense-year'>{year}</div>
    </div>
}

export default ExpenseDate