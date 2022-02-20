import HeaderSignOut from './HeaderSignOut/HeaderSignOut';
import HeaderSignIn from './HeaderSignIn/HeaderSignIn';
import Logo from '../Logo/Logo';
import {MainPropsType} from '../../types/MainPropsType';


function Header({isLogin}: MainPropsType) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isHeader/>
          </div>
          {isLogin ? <HeaderSignOut /> : <HeaderSignIn />}
        </div>
      </div>
    </header>
  );
}

export default Header;
