import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem.js'

function App() {
  return (
    <div className="App">
      <p>This is the mains screen</p>
        <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
