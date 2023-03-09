import { useEffect, useState } from 'react';

import { InputWrapper } from './style';
import { Select, Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import {
  countryCurrencyList,
} from '../../utils/currencyAndSymbol';
import { IDropdownType } from './types';

const { Option } = Select;

const SelectItem = ({ item }) => {
  return (
    <div>
      <Space>
        <span
          role="img"
          aria-label={item.CountryName}
          style={{ fontSize: '18px', marginRight: '5px' }}
        >
          <span
            className={`fi fi-${item.ISOCode.slice(0, 2).toLowerCase()}`}
          ></span>
        </span>
        <div style={{ lineHeight: '16px' }}>
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
  const [list, setList] = useState(countryCurrencyList);

  useEffect(() => {
    handleSearch('');
  }, []);

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  const handleSearch = (input) => {
    const presentedList = [];

    const inputText = input.toLowerCase();
    let filter = countryCurrencyList.filter((item) => {
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
      presentedList.forEach((presentItem) => {
        filter = filter.filter(
          (item) =>
            (item.ISOCode == presentItem && item.Presented) ||
            item.ISOCode !== presentItem,
        );
      });
    }

    setList(filter);
  };

  const onSelect = () => {
    setList(countryCurrencyList);
  };

  return (
    <InputWrapper>
      <Text strong>{props.label}</Text>

      <Select
        showSearch
        style={{ width: '100%' }}
        placeholder="select one currency"
        defaultValue={[props.defaultValue]}
        onChange={handleChange}
        onSearch={handleSearch}
        onSelect={onSelect}
        optionLabelProp="label"
        size="large"
      >
        {list.map((item) => (
          <Option
            value={item.ISOCode + '_' + item.CountryName}
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
