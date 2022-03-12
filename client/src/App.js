
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExp } from './components/IncomeExp';
import { TransactionList } from './components/TransactionList';
import { AddTransactions } from './components/AddTransactions';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>

     <Header />
     <div classname ="container">
      <Balance />
      <IncomeExp />
      <TransactionList />
      <AddTransactions />

    </div>
    

    </GlobalProvider>
  );
}

export default App;
