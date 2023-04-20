import { UserAddOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import Container from '../Container';
import { HeaderInner, HeaderWrapper, Logo, RightSide } from './style';

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderInner>
          <Logo href="/">
            <img src="/images/logo.png" />
          </Logo>
          <RightSide>
            <Space>
              <a href="https://rapidapi.com/trung1704ptit/api/currency-converter228/pricing">
                <Button type="primary" size="large" icon={<UserAddOutlined />}>
                  Register
                </Button>
              </a>
            </Space>
          </RightSide>
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
