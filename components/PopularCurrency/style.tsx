// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

export const PopularCurrencyTitle = styled.div`
  text-align: center;
  margin-bottom: 40px;
  margin-top: 40px;
`;

export const CurrencyBlockWrapper = styled.div`
  padding: 24px;
  border-radius: 16px;
  box-shadow: rgb(0 17 51 / 10.5%) 0px 3px 15px;
  height: 100%;
  background: #fff;
`;

export const CurrencyText = styled.div`
  color: rgb(92, 102, 92);
  margin-top: 10px;
  font-size: 14px;
`;

export const CurrencyPrice = styled.div`
  margin-top: 5px;
  font-size: 20px;
  color: rgb(51, 51, 51);
`;

export const CurrencyChanged = styled.div<{ changedStatus?: string }>`
  margin-top: 5px;
  font-size: 14px;
  color: ${(props) => props.changedStatus};
`;

export const CurrencyLink = styled.a`
  color: rgb(0, 111, 232);
  display: inline-flex;
  text-decoration: none;
  margin-top: 20px;
  align-items: center;
`;

export const CurrencyViewMoreText = styled.span`
  margin-right: 5px;
  font-weight: 300;
`;

export const DailyText = styled.span`
  color: rgb(92, 102, 92);
`;
