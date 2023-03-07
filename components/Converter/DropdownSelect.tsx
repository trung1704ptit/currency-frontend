import { useState } from 'react';

import { InputWrapper } from './style';
import { Select, Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import { currencyAndSymbol } from '../../utils/currencyAndSymbol';
import { IDropdownType } from './types';

const { Option } = Select;

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const SelectItem = ({ item }) => {
  return (
    <Space>
      <span role="img" aria-label={item.CountryName}>
        <span
          className={`fi fi-${item.ISOCode.slice(0, 2).toLowerCase()}`}
        ></span>
      </span>
      {item.ISOCode} - {item.Currency}
    </Space>
  );
};

const DropdownSelect = (props: IDropdownType) => {
  return (
    <InputWrapper>
      <Text strong>{props.label}</Text>

      <Select
        showSearch
        style={{ width: '100%' }}
        placeholder="select one country"
        defaultValue={['USD']}
        onChange={handleChange}
        optionLabelProp="label"
        size="large"
      >
        {currencyAndSymbol.map((item) => (
          <Option
            value={item.ISOCode + item.CountryName}
            key={item.ISOCode + item.CountryName}
            label={<SelectItem item={item} />}
            style={{ minHeight: '45px', lineHeight: '34px'}}
          >
            <SelectItem item={item} />
          </Option>
        ))}
      </Select>
    </InputWrapper>
  );
};

export default DropdownSelect;
