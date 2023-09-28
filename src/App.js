// import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
