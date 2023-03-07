import { Row, Col, Button } from 'antd';

import Container from '../Container';
import AmountInput from './AmountInput';
import DropdownSelect from './DropdownSelect';
import { ConvertButtonWrapper, Section, Wrapper, Tooltip, ConvertButtonWrap } from './style';

const Converter = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Row gutter={[24, 24]}>
            <Col md={8} xs={24}>
              <AmountInput />
            </Col>
            <Col md={8} xs={24}>
              <DropdownSelect label="From" />
            </Col>

            <Col md={8} xs={24}>
              <DropdownSelect label="To" />
            </Col>
          </Row>
          <ConvertButtonWrapper>
            <Tooltip>
              We use the mid-market rate for our Converter. This is for
              informational purposes only. You won’t receive this rate when
              sending money.
            </Tooltip>
            <ConvertButtonWrap>
              <Button type="primary" size="large">
                Convert
              </Button>
            </ConvertButtonWrap>
          </ConvertButtonWrapper>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Converter;
