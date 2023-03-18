import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import Container from '../Container';
import AmountInput from './AmountInput';
import { countryCurrencyList } from '../../utils/currencyAndSymbol';
import DropdownSelect from '../CurrencyDropdownSelect';
import {
  ConvertButtonWrapper,
  Section,
  Wrapper,
  Tooltip,
  ConvertPair,
} from './style';
import { IConverter, IResult } from './types';

const { Text } = Typography;

const getCurrencyInfo = (name) => {
  return countryCurrencyList.find(
    (item) => item.ISOCode.toLowerCase() === name.toLowerCase(),
  );
};

const Converter = (props: IConverter) => {
  const router = useRouter();

  const [state, setState] = useState<IResult>({
    from: props.data.from,
    to: props.data.to,
    amount: props.data.amount || 1,
    pairName: props.data.pairName,
    price: props.data.price,
    dayChanged: props.data.dayChanged,
    dayChangedByPercent: props.data.dayChangedByPercent,
    dayChangedStatus: props.data.dayChangedStatus,
    lastUpdated: props.data.lastUpdated,
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState({ ...state, amount: Number(value) });
    // router.push({
    //   query: { amount: value, from: state.from, to: state.to },
    // });
  };

  const handleChangeFrom = (val) => {
    setState({ ...state, from: val });
    router.push({
      query: { amount: state.amount, from: val, to: state.to },
    });
  };

  const handleChangeTo = (val) => {
    setState({ ...state, to: val });

    router.push({
      query: { amount: state.amount, from: state.from, to: val },
    });
  };

  useEffect(() => {
    setState({ ...state, ...props.data });
  }, [props.data]);

  const fromDetail = getCurrencyInfo(state.from);
  const toDetail =  getCurrencyInfo(state.to);

  return (
    <Section>
      <Container>
        <Wrapper>
          <Row gutter={[24, 24]}>
            <Col md={8} xs={24}>
              <AmountInput
                handleChange={handleChangeInput}
                defaultValue={state.amount}
                fromDetail={fromDetail}
              />
            </Col>
            <Col md={8} xs={24}>
              <DropdownSelect
                label="From"
                defaultValue={state.from}
                handleChange={handleChangeFrom}
              />
            </Col>

            <Col md={8} xs={24}>
              <DropdownSelect
                label="To"
                defaultValue={state.to}
                handleChange={handleChangeTo}
              />
            </Col>
          </Row>
          <ConvertButtonWrapper>
            <div>
              <ConvertPair>
                {state.amount} {state.from} ={' '}
                {(state.price * state.amount).toPrecision(6)} {state.to}
              </ConvertPair>

              <div>
                <Text>
                  1 {fromDetail.Currency} = {state.price}{' '}
                  {toDetail.Currency}
                </Text>
              </div>

              <Text type="secondary">
                Last updated: {new Date(state.lastUpdated).toLocaleString()}
              </Text>
            </div>

            <Tooltip>
              <Text>
                We use the mid-market rate for our Converter. This is for
                informational purposes only. You won’t receive this rate when
                sending money.
              </Text>
            </Tooltip>
          </ConvertButtonWrapper>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Converter;
