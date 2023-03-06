/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';

export const Wrapper = styled.main`
  padding: 32px 16px;
  width: 100%;
  box-shadow: rgb(35 55 80 / 30%) 0px 6px 12px;
  border-radius: 8px;
  margin: auto;

  @media only screen and (min-width: 768px) {
    padding: 48px;
  }
`;

export const InputWrapper = styled.div`
  .ant-select,
  .ant-input-affix-wrapper {
    margin-top: 6px;
    height: 50px;
    border-radius: 6px;
  }
  .ant-select-selector {
    height: 50px !important;
    line-height: 50px !important;
    border-radius: 6px !important;
  }
  .ant-select-selection-item {
    height: 50px !important;
    line-height: 50px !important;
  }
`;

export const Section = styled.div`
  margin: 0px auto;
  max-width: 1200px px;
  position: relative;
  margin: 100px 0;
  & div {
    margin: 0 auto;
  }
`;
