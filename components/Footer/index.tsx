
import { FooterWrapper } from './style';

const Footer = () => {
  return (
    <FooterWrapper>
      © Copyright {new Date().getFullYear()} Trung Nguyen. Made with{' '}
      <a href="https://apiup.org">apiup.org</a>.
    </FooterWrapper>
  );
};

export default Footer;
