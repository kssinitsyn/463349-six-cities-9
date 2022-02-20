import Header from '../../Header/Header';

import {MainPropsType} from '../../../types/MainPropsType';
import Footer from '../../Footer/Footer';

function NotFound(props: MainPropsType) {
  return (
    <div className="page page--gray page--main">
      <Header isLogin={props.isLogin}/>
      <main className="page__not-found page__main--index">
        <p>404</p>
        <p>Страница не найдена</p>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
