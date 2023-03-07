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
    <div>
      <Space>
        <span role="img" aria-label={item.CountryName} style={{ fontSize: '18px', marginRight: '5px'}}>
          <span
            className={`fi fi-${item.ISOCode.slice(0, 2).toLowerCase()}`}
          ></span>
        </span>
        <div style={{ lineHeight: '16px'}}>
          <span>
            {item.ISOCode} - {item.Currency}
          </span>
          <div style={{ fontSize: '12px' }}>({item.CountryName})</div>
        </div>
      </Space>
    </div>
  );
};


const DropdownSelect = (props: IDropdownType) => {
  const [list, setList] = useState(currencyAndSymbol);
  const presentedList = [];
  const handleSearch = (input) => {
    const inputText = input.toLowerCase();
    let filter = currencyAndSymbol.filter((item) => {
      const ISOCode = item.ISOCode.toLowerCase();
      const CountryName = item.CountryName.toLowerCase();
      const Currency = item.Currency.toLowerCase();
      if (
        ISOCode.indexOf(inputText) > -1 ||
        Currency.indexOf(inputText) > -1 ||
        CountryName.indexOf(inputText) > -1
      ) {
        if (item.Presented) {
          presentedList.push(item.ISOCode);
        }
        return true;
      }
    });
    if (presentedList.length) {
      presentedList.forEach(presentItem => {
        filter = filter.filter(
          (item) =>
            (item.ISOCode == presentItem && item.Presented) ||
            item.ISOCode !== presentItem,
        );
      })
    }

    setList(filter);
  };

  return (
    <InputWrapper>
      <Text strong>{props.label}</Text>

      <Select
        showSearch
        style={{ width: '100%' }}
        placeholder="select one country"
        defaultValue={['USD']}
        onChange={handleChange}
        onSearch={handleSearch}
        optionLabelProp="label"
        size="large"
      >
        {list.map((item) => (
          <Option
            value={item.ISOCode + item.CountryName}
            key={item.ISOCode + item.CountryName}
            label={<SelectItem item={item} />}
            style={{ minHeight: '45px', lineHeight: '34px' }}
          >
            <SelectItem item={item} />
          </Option>
        ))}
      </Select>
    </InputWrapper>
  );
};

export default DropdownSelect;
