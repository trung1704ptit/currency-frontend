import { LoginOutlined, LogoutOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import Container from '../Container';
import { HeaderInner, HeaderWrapper, Logo, RightSide } from './style';

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderInner>
          <Logo href='/'>
            <img src="/logo.png" />
          </Logo>
          <RightSide>
            <Space>
              <Button size='middle' icon={<LoginOutlined />}>
                Login
              </Button>
              <Button type="primary" size="middle" icon={<UserAddOutlined />}>
                Register
              </Button>
            </Space>
          </RightSide>
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
