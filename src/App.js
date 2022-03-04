
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExp } from './components/IncomeExp';
import { TransactionList } from './components/TransactionList';
import { AddTransactions } from './components/AddTransactions';

function App() {
  return (
    <div>

     <Header />
     <div classname ="container">
      <Balance />
      <IncomeExp />
      <TransactionList />
      <AddTransactions />
      
    </div>
    

    </div>
  );
}

export default App;
