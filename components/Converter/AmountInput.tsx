import { Input } from 'antd';
import Text from 'antd/lib/typography/Text';
import { InputWrapper } from './style';

const AmountInput = (props) => {
  return (
    <InputWrapper>
      <Text strong>Amount</Text>
      <Input
        prefix="￥"
        size="large"
        type="number"
        onChange={props.handleChange}
        defaultValue={props.defaultValue}
      />
    </InputWrapper>
  );
};

export default AmountInput;
