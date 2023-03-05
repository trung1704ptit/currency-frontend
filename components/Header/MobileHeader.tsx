import { BurgerButton } from './style';

const Header = () => {
  return (
    <header>
      <div id="mobile-header">
        <BurgerButton />
        <ul id="nav">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
