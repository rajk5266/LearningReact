import ExpenseItem from "./components/Expenses/ExpenseItem";

const App = () => {
  const expenses = [
    {
      id: "1",
      title: "car Insurance",
      amount: 100,
      date: new Date(),
      location: "mumbai",
    },
    {
      id: "2",
      title: "travelling",
      amount: 400,
      date: new Date(),
      location: "mumbai",
    },
    {
      id: "3",
      title: "Food",
      amount: 5600,
      date: new Date(),
      location: "dominos",
    },
  ];


  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        );
      })}
    </div>
  );
}

export default App;
