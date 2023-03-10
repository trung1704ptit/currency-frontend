import { Input } from 'antd';
import Text from 'antd/lib/typography/Text';
import { InputWrapper } from './style';

const AmountInput = (props) => {
  return (
    <InputWrapper>
      <Text strong>Amount</Text>
      <Input
        prefix="￥"
        suffix="RMB"
        size="large"
        type="number"
        onChange={props.handleChange}
      />
    </InputWrapper>
  );
};

export default AmountInput;
