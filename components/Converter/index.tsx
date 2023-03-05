import { Row, Col } from 'antd';
import AmountInput from './AmountInput';
import DropdownSelect from './DropdownSelect';
import { Section, Wrapper } from './style';

const Converter = () => {
  return (
    <Section>
      <Row>
        <Col md={16} xs={24}>
          <Wrapper>
            <Row gutter={[24, 24]}>
              <Col md={8} xs={24}>
                <AmountInput />
              </Col>
              <Col md={8} xs={24}>
                <DropdownSelect />
              </Col>

              <Col md={8} xs={24}>
                <DropdownSelect />
              </Col>
            </Row>
          </Wrapper>
        </Col>
      </Row>
    </Section>
  );
};

export default Converter;
