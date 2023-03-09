/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';

export const Wrapper = styled.main`
  padding: 48px 16px;
  width: 100%;
  box-shadow: rgb(35 55 80 / 30%) 0px 6px 12px;
  border-radius: 8px;
  margin: auto;
  background: #fff;

  @media only screen and (min-width: 768px) {
    padding: 70px 48px;
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
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const Section = styled.div`
  max-width: 1200px px;
  position: relative;
  padding: 70px 0;
  @media only screen and (min-width: 768px) {
    padding: 120px 0px;
  }
`;

export const ConvertButtonWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  margin-top: 20px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ConvertButtonWrap = styled.div`
  margin-top: 20px;
  button {
    height: 50px;
    width: 100%;
    @media only screen and (min-width: 768px) {
      width: 200px;
    }
  }
`;

export const Tooltip = styled.div`
  padding: 16px;
  background: rgb(242, 247, 254);
  color: rgb(92, 102, 123);
  max-width: 480px;
  margin-top: 20px;
`;
