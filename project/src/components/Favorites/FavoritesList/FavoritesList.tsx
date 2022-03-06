import FavoritesItem from '../FavoritesItem/FavoritesItem';
import {FavoritesType} from '../../../types/FavoritesType';

function FavoritesList({favoritesList}: FavoritesType) {
  return (
    <ul className="favorites__list">
      <FavoritesItem favoritesList={favoritesList}/>,
    </ul>
  );
}

export default FavoritesList;
