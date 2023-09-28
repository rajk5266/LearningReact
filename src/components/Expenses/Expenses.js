import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"

const Expenses = (props) => {
    return props.items.map((expense) => (
      <Card key={expense.id}>
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      </Card>
    ));
  };
  
export default Expenses