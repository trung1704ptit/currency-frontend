import Converter from '../components/Converter';
import Header from '../components/Header';
import { PopularCurrency } from '../components/PopularCurrency';
import { IResult } from '../components/Converter/types';
import Footer from '../components/Footer';
import { getCurrencyByBase } from '../utils/httpUtils';

const Index = (props) => {
  return (
    <div>
      <Header />
      <Converter data={props.converter} />
      <PopularCurrency />
      <Footer />
    </div>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const query = context.query;
  const from = query.from;
  const to = query.to;
  let data: IResult | null = null;

  if (from && to) {
    if (!query.amount) {
      return {
        redirect: {
          destination: context.resolvedUrl + '&amount=1',
          permanent: false,
        },
      };
    }
    const res = await getCurrencyByBase({ from, to });
    if (res && res?.mapping) {
      data = res.mapping[0];
    }
    if (data) {
      data.lastUpdated = res.lastUpdated;
    }
  } else {
    return {
      redirect: {
        destination: '/?amount=1&from=USD&to=SGD',
        permanent: false,
      },
    };
  }

  if (!data) {
    return {
      redirect: {
        destination: '/not-found',
        permanent: false,
      },
    };
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
      },
    },
  };
}
