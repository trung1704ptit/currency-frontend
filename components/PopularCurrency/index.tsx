import { Row, Col } from 'antd';
import { Typography } from 'antd';
import Container from '../Container';
import CurrencyBlock from './CurrencyBlock';
import { PopularCurrencyTitle } from './style';

const { Title } = Typography;

export const PopularCurrency = ({ popularData }) => {
  return (
    <Container>
      <PopularCurrencyTitle>
        <Title level={2}>Popular Currency Pairings</Title>
      </PopularCurrencyTitle>
      <Row gutter={[16, 16]}>
        {popularData?.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} key={item.pairName}>
            <CurrencyBlock currencyData={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
