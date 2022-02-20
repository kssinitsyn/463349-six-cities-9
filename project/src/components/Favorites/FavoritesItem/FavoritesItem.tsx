import {Link} from 'react-router-dom';
import FavoritesPlaceCard from '../FavoritesPlaceCard/FavoritesPlaceCard';

function FavoritesItem() {
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
        <FavoritesPlaceCard />
      </div>
    </li>
  );
}

export default FavoritesItem;
