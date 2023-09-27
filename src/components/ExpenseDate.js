function ExpenseDate(props){
    const month = props.date.getMonth();
    const day = props.date.getDate();
    const year = props.date.getFullYear()

    return <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
    </div>
}

export default ExpenseDate