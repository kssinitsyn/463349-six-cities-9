import FavoritesList from './FavoritesList/FavoritesList';
import {FavoritesType} from '../../types/FavoritesType';

function Favorites({favoritesList}: FavoritesType) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoritesList favoritesList={favoritesList}/>
    </section>
  );
}

export default Favorites;
