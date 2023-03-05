import { useState } from 'react';

import { InputWrapper } from './style';
import { Select, Space } from 'antd';
import Text from 'antd/lib/typography/Text';

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
        defaultValue={['china']}
        onChange={handleChange}
        optionLabelProp="label"
        size="large"
      >
        <Option value="china" label="China">
          <Space>
            <span role="img" aria-label="China">
              <span className="fi fi-cn"></span>
            </span>
            China (中国)
          </Space>
        </Option>
        <Option value="usa" label="USA">
          <Space>
            <span role="img" aria-label="USA">
              🇺🇸
            </span>
            USA (美国)
          </Space>
        </Option>
        <Option value="japan" label="Japan">
          <Space>
            <span role="img" aria-label="Japan">
              🇯🇵
            </span>
            Japan (日本)
          </Space>
        </Option>
        <Option value="korea" label="Korea">
          <Space>
            <span role="img" aria-label="Korea">
              🇰🇷
            </span>
            Korea (韩国)
          </Space>
        </Option>
      </Select>
    </InputWrapper>
  );
};

export default DropdownSelect;
