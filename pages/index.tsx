import Converter from '../components/Converter';
import Header from '../components/Header';
import { PopularCurrency } from '../components/PopularCurrency';

const Index = (props) => {
  return (
    <div>
      <Header />
      <Converter data={props.converter} />
      <PopularCurrency />
    </div>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const query = context.query;

  if (query.from && query.to) {

  }
  // query api data with 
  return {
    props: {
      converter: {
        from: query.from || 'USD',
        to: query.to || 'EUR',
        amount: query.amount || 1,
        pairName: 'USD/EUR',
        price: 0.823,
        dayChanged: 0.000002,
        dayChangedByPercent: 0.00012,
        dayChangedStatus: '-',
        lastUpdated: '2023-03-10T10:21:44.135Z',
      }
    },
  }
}
