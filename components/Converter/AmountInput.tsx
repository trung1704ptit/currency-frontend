import { Input } from 'antd';
import Text from 'antd/lib/typography/Text';
import { InputWrapper } from './style';

const AmountInput = () => {
  return (
    <InputWrapper>
      <Text strong>Amount</Text>
      <Input prefix="￥" suffix="RMB" size="large" />
    </InputWrapper>
  );
};

export default AmountInput;
