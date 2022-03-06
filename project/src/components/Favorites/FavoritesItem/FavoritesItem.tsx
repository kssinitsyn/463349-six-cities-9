import {Link} from 'react-router-dom';
import FavoritesPlaceCard from '../FavoritesPlaceCard/FavoritesPlaceCard';
import {FavoritesType} from '../../../types/FavoritesType';

function FavoritesItem({favoritesList}: FavoritesType) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={'/'}>
            <span>Amsterdam</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoritesList.map((item) =>
          <FavoritesPlaceCard key={item.id} itemData={item}/>,
        )}
      </div>
    </li>
  );
}

export default FavoritesItem;
