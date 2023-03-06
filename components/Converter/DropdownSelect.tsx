import { useState } from 'react';

import { InputWrapper } from './style';
import { Select, Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import { currencyAndSymbol } from '../../utils/currencyAndSymbol';

const { Option } = Select;

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};
const DropdownSelect = () => {
  const [currentValue, setCurrentValue] = useState('');

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  return (
    <InputWrapper>
      <Text strong>From</Text>

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
            label={
              <Space>
                <span role="img" aria-label={item.CountryName}>
                  <span
                    className={`fi fi-${item.ISOCode.slice(
                      0,
                      2,
                    ).toLowerCase()}`}
                  ></span>
                </span>
                {item.ISOCode} - {item.Currency}
              </Space>
            }
          >
            <Space>
              <span role="img" aria-label={item.CountryName}>
                <span
                  className={`fi fi-${item.ISOCode.slice(0, 2).toLowerCase()}`}
                ></span>
              </span>
              {item.ISOCode} - {item.Currency}
            </Space>
          </Option>
        ))}
      </Select>
    </InputWrapper>
  );
};

export default DropdownSelect;
