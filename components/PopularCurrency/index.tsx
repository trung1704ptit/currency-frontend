import { Row, Col } from 'antd';
import { Typography } from 'antd';
import Container from '../Container';
import CurrencyBlock from './CurrencyBlock';
import { PopularCurrencyTitle } from './style';

const { Title } = Typography;

export const PopularCurrency = () => {
  return (
    <Container>
      <PopularCurrencyTitle>
        <Title level={2}>Popular Currency Pairings</Title>
      </PopularCurrencyTitle>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CurrencyBlock pairName="USD/SGD" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CurrencyBlock pairName="USD/SGD" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CurrencyBlock pairName="GBP/SGD" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CurrencyBlock pairName="EUR/SGD" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CurrencyBlock pairName="CAD/SGD" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CurrencyBlock pairName="AUD/SGD" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CurrencyBlock pairName="NZD/SGD" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CurrencyBlock pairName="BRL/SGD" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CurrencyBlock pairName="HKD/SGD" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CurrencyBlock pairName="MXN/SGD" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CurrencyBlock pairName="CNY/SGD" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CurrencyBlock pairName="TRY/SGD" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CurrencyBlock pairName="JPY/SGD" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CurrencyBlock pairName="JPY/SGD" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CurrencyBlock pairName="JPY/SGD" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CurrencyBlock pairName="TWD/SGD" />
        </Col>
      </Row>
    </Container>
  );
};
