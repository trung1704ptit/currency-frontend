import { useEffect, useState } from 'react';

import { InputWrapper } from './style';
import { Select, Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import {
  countryCurrencyList,
} from '../../utils/currencyAndSymbol';
import { IDropdownType } from './types';

const { Option } = Select;

const SelectItem = ({ item, isShowCountryName }) => {
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
          {isShowCountryName ? (
            <div style={{ fontSize: '12px' }}>({item.CountryName})</div>
          ) : null}
        </div>
      </Space>
    </div>
  );
};

const DropdownSelect = (props: IDropdownType) => {
  const [list, setList] = useState(countryCurrencyList);
  const [value, setValue] = useState(props.defaultValue);

  useEffect(() => {
    handleSearch('');
  }, []);

  const handleChange = (value: string) => {
    const val = value.slice(0, 3)
    props.handleChange(val);
    setValue(val);
  };

  const handleSearch = (input) => {
    const GroupLeadList = [];

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
        if (item.IsGroupLead) {
          GroupLeadList.push(item.ISOCode);
        }
        return true;
      }
    });
    if (GroupLeadList.length) {
      GroupLeadList.forEach((gItem) => {
        filter = filter.filter(
          (item) =>
            (item.ISOCode == gItem && item.IsGroupLead) ||
            item.ISOCode !== gItem,
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
        onChange={handleChange}
        onSearch={handleSearch}
        onSelect={onSelect}
        filterOption={() => true}
        optionLabelProp="label"
        size="large"
        defaultValue={value}
        value={value}
      >
        {list.map((item, index) => {
          return (
            <Option
              value={item.ISOCode + (item.IsInGroup ? `_${index}` : '')}
              key={item.ISOCode + item.CountryName}
              label={<SelectItem item={item} isShowCountryName={false} />}
              style={{ minHeight: '45px', lineHeight: '34px' }}
            >
              <SelectItem item={item} isShowCountryName={true} />
            </Option>
          );
        })}
      </Select>
    </InputWrapper>
  );
};

export default DropdownSelect;
