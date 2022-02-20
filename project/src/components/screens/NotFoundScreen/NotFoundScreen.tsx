import {Link} from 'react-router-dom';

import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import {MainPropsType} from '../../../types/MainPropsType';

function NotFound(props: MainPropsType) {
  return (
    <div className="page page--gray page--main">
      <Header isLogin={props.isLogin}/>
      <main className="page__not-found not-found page__main--index">
        <p className="not-found__title">404</p>
        <p className="not-found__subtitle">Страница не найдена</p>
        <Link className="not-found__link" to={'/'}>На главную страницу</Link>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
