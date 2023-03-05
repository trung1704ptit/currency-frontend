/* eslint-disable import/no-extraneous-dependencies */
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import {
  ArrowRightOutlined
} from '@ant-design/icons';

import {
  CurrencyBlockWrapper,
  CurrencyChanged,
  CurrencyLink,
  CurrencyPrice,
  CurrencyText,
  CurrencyViewMoreText,
  DailyText,
} from './style';
import type { CurrencyInputType, ICurrencyProps } from './type';

const CurrencyBlock = ({ pairName }: CurrencyInputType) => {
  const [data, setData] = useState<ICurrencyProps>();

  useEffect(() => {
    // const socket = socketIOClient(ENDPOINT);
    const socket = io('http://localhost:5000', {
      query: {
        pairName,
      },
    });
    socket.on(pairName, (res) => {
      setData(res);
    });
  }, []);

  if (data) {
    let dayChangedStatus: string = 'unset';
    if (data.dayChangedStatus === '+') {
      dayChangedStatus = 'green';
    } else if (data.dayChangedStatus === '-') {
      dayChangedStatus = 'red';
    }
    return (
      <CurrencyBlockWrapper>
        <div>
          <span
            className={`fi fi-${data?.from?.slice(0, 2).toLowerCase()}`}
          ></span>{' '}
          {data.from} /{' '}
          <span
            className={`fi fi-${data?.to?.slice(0, 2).toLowerCase()}`}
          ></span>{' '}
          {data.to}
        </div>
        <CurrencyText>1 {data?.from} equals to</CurrencyText>
        <CurrencyPrice>
          {data?.price} {data.to}
        </CurrencyPrice>

        <CurrencyChanged changedStatus={dayChangedStatus}>
          {data.dayChangedStatus}
          {data.dayChanged} ({data.dayChangedByPercent}%){' '}
          <DailyText>Daily</DailyText>
        </CurrencyChanged>
        <CurrencyLink href="/details">
          <CurrencyViewMoreText>View more</CurrencyViewMoreText>{' '}
          {/* <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '13px' }} /> */}
          <ArrowRightOutlined style={{ fontSize: '13px' }} />
        </CurrencyLink>
      </CurrencyBlockWrapper>
    );
  }
  return null;
};

export default CurrencyBlock;
