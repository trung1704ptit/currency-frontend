// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

export const CurrencyListWrapper = styled.div`
  margin-top: 40px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 0 10px;
  @media only screen and (min-width: 768px) {
    padding: 0;
  }
`;

export const PopularCurrencyTitle = styled.h3`
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
`;

export const CurrencyBlockWrapper = styled.div`
  padding: 24px;
  border-radius: 16px;
  box-shadow: rgb(0 17 51 / 10.5%) 0px 3px 15px;
`;

export const CurrencyText = styled.div`
  color: rgb(92, 102, 92);
  margin-top: 10px;
  font-size: 14px;
`;

export const CurrencyPrice = styled.div`
  margin-top: 10px;
  font-size: 20px;
  color: rgb(51, 51, 51);
`;

export const CurrencyChanged = styled.div<{ changedStatus?: string }>`
  margin-top: 10px;
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
