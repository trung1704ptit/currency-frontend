import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { Row, Col, Button } from 'antd';
import Text from 'antd/lib/typography/Text';
import Container from '../Container';
import AmountInput from './AmountInput';
import DropdownSelect from '../CurrencyDropdownSelect';
import { ConvertButtonWrapper, Section, Wrapper, Tooltip, ConvertPair } from './style';

const Converter = () => {
  const router = useRouter();

  const [state, setState] = useState({
    amount: 1,
    from: 'USD',
    to: 'EUR'
  }) 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState({ ...state, amount: Number(value) })
  }

  const handleChangeFrom = (val) => {
    console.log('---from', val)
    setState({ ...state, from: val});
    router.push({
      pathname: '/',
      query: { amount: state.amount, from: val, to: state.to },
    });
  }

  const handleChangeTo = val => {
    setState({ ...state, to: val})
    console.log('---to ', val)

    router.push({
      pathname: '/',
      query: { amount: state.amount, to: val, from: state.to },
    });
  }

  return (
    <Section>
      <Container>
        <Wrapper>
          <Row gutter={[24, 24]}>
            <Col md={8} xs={24}>
              <AmountInput handleChange={handleChange} />
            </Col>
            <Col md={8} xs={24}>
              <DropdownSelect label="From" defaultValue={state.from} handleChange={handleChangeFrom}/>
            </Col>

            <Col md={8} xs={24}>
              <DropdownSelect label="To" defaultValue={state.to} handleChange={handleChangeTo}/>
            </Col>
          </Row>
          <ConvertButtonWrapper>
            <div>
            <ConvertPair>
              {state.amount} {state.from} = 1.3750 {state.to}
            </ConvertPair>
            <Text type="secondary">Last updated 20h 20 30/3/2023</Text>
            </div>

            <Tooltip>
              We use the mid-market rate for our Converter. This is for
              informational purposes only. You won’t receive this rate when
              sending money.
            </Tooltip>
          </ConvertButtonWrapper>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Converter;
