import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem.js'

function App() {
    const expenses = [
        {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 6, 4)},
        {title: 'Housing Various', amount: 315.67, date: new Date(2021, 4, 5)},
        {title: 'Rent', amount: 200.67, date: new Date(2021, 3, 6)},
        {title: 'Travel', amount: 100.67, date: new Date(2021, 12, 4)}
    ];

    return (
        <div className="App">
            <h2>Let's get started!</h2>
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>

        </div>
    );
}

export default App;
