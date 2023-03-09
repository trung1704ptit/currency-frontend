import Converter from '../components/Converter';
import Header from '../components/Header';
import { PopularCurrency } from '../components/PopularCurrency';

const Index = () => {
  return (
    <div>
      <Header />
      <Converter />
      <PopularCurrency />
    </div>
  );
};

export default Index;
