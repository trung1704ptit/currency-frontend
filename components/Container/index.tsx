import { Col, Row } from 'antd';

const Container = (props: any) => {
  return (
    <Row>
      <Col xs={1} md={2} lg={4}></Col>
      <Col xs={22} md={20} lg={16}>
        {props.children}
      </Col>
      <Col xs={1} md={2} lg={4}></Col>
    </Row>
  );
};

export default Container;
