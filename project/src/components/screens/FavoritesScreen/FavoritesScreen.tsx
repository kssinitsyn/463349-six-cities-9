import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Favorites from '../../Favorites/Favorites';

import {FavoritesType} from '../../../types/FavoritesType';

function FavoritesScreen({favoritesList}: FavoritesType) {
  return (
    <div className="page">
      <Header isLogin/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <Favorites favoritesList={favoritesList}/>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FavoritesScreen;
