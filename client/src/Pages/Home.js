import { Header } from '../components/Header';
import { Balance } from '../components/Balance';
import { IncomeExpenses } from '../components/IncomeExpenses';
import { TransactionList } from '../components/TransactionList';
import FloatingActionButton from '../components/FloatingActionButton';

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <div>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <FloatingActionButton />
      </div>
    </div>
  );
};

export default Home;
