import Converter from '../components/Converter';
import Header from '../components/Header';
import { PopularCurrency } from '../components/PopularCurrency';
import Footer from '../components/Footer';
import { getCurrencyByBase } from '../utils/httpUtils';

const Index = (props) => {
  return (
    <div>
      <Header />
      <Converter data={props.converterData} />
      <PopularCurrency popularData={props.popularData} />
      <Footer />
    </div>
  );
};

export default Index;

const defaultRedirect = {
  redirect: {
    destination: '/?amount=1&from=USD&to=EUR',
    permanent: false,
  },
};

const notFoundRedirect = {
  redirect: {
    destination: '/not-found',
    permanent: false,
  },
};

export async function getServerSideProps(context) {
  const query = context.query;
  const from = query.from;
  const to = query.to;
  let data: any;

  if (from && to) {
    if (!query.amount) {
      return {
        redirect: {
          destination: context.resolvedUrl + '&amount=1',
          permanent: false,
        },
      };
    }
    const res = await getCurrencyByBase({ from });
    if (res && res?.rates) {
      data = res.rates;
    } else {
      return notFoundRedirect;
    }
  } else {
    return defaultRedirect;
  }

  // not from or not to => redirect to defaultRedirect
  // have both form and to, but not amount => redirect to DefaultRedirect.
  // have from, to, amount => query => if have no data => redirect to /not-found

  const currencySelected = data.find((item) => item.to === to);
  if (currencySelected) {
    return {
      props: {
        converterData: {
          from: currencySelected.from,
          to: currencySelected.to,
          pairName: currencySelected.pairName,
          price: currencySelected.price,
          dayChanged: currencySelected.dayChanged,
          dayChangedByPercent: currencySelected.dayChangedByPercent,
          dayChangedStatus: currencySelected.dayChangedStatus,
          lastUpdated: currencySelected?.lastUpdated || null,
        },
        popularData: data,
      },
    };
  }
  return defaultRedirect;
}
