import Converter from '../components/Converter';
import Header from '../components/Header';
import { PopularCurrency } from '../components/PopularCurrency';
import api from '../api';
import { IResult } from '../components/Converter/types';

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
  const from = query.from || 'USD';
  const to = query.to || 'SGD';
  let data: IResult | null = null;

  if (from && to) {
    const res = await api.get('http://localhost:5000/v1/currency', {
      params: { from, to },
    });
    data = res.data;
  }

  if (!data) {
    return {
      redirect: {
        destination: '/not-found',
        permanent: false,
      },
    }
  }

  return {
    props: {
      converter: {
        from: data.from,
        to: data.to,
        pairName: data.pairName,
        price: data.price,
        dayChanged: data.dayChanged,
        dayChangedByPercent: data.dayChangedByPercent,
        dayChangedStatus: data.dayChangedStatus,
        lastUpdated: data.lastUpdated,
      }
    },
  }
}
