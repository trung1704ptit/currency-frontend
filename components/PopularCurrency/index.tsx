import { Row, Col } from 'antd';
import { Typography } from 'antd';
import Container from '../Container';
import { biggestEconomics } from './constant';
import CurrencyBlock from './CurrencyBlock';
import { PopularCurrencyTitle } from './style';

const { Title } = Typography;

export const PopularCurrency = ({ popularData }) => {
  const filterList = popularData?.filter((item) => {
    const filterItem = biggestEconomics.find(
      (big) => big.ISOCode === item.to && big.ISOCode !== item.from,
    );
    if (filterItem) return true;
    return false;
  });

  return (
    <Container>
      <PopularCurrencyTitle>
        <Title level={2}>Popular Currency Pairings</Title>
      </PopularCurrencyTitle>
      <Row gutter={[16, 16]}>
        {filterList?.slice(0,20).map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} key={item.pairName}>
            <CurrencyBlock currencyData={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
