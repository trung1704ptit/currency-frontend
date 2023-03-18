import { ReactElement, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import {
  ArrowRightOutlined
} from '@ant-design/icons';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

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

const CurrencyBlock = ({ currencyData }: CurrencyInputType) => {
  const [data, setData] = useState<ICurrencyProps>(currencyData);

  useEffect(() => {
    setData(currencyData);
    const socket = io(process.env.API_CONTENT, {
      query: {
        pairName: currencyData.pairName,
      },
    });
    socket.on(currencyData.pairName, (res) => {
      setData(res);
    });
  }, [currencyData]);

  if (data) {
    let dayChangedStatus: string = 'unset';
    let dayChangedStatusIcon: ReactElement = null;
    if (data.dayChangedStatus === '+') {
      dayChangedStatus = 'green';
      dayChangedStatusIcon = <ArrowUpOutlined />
    } else if (data.dayChangedStatus === '-') {
      dayChangedStatus = 'red';
      dayChangedStatusIcon = <ArrowDownOutlined />
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
          {dayChangedStatusIcon}
          {data.dayChanged} ({data.dayChangedStatus}{data.dayChangedByPercent}%){' '}
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
