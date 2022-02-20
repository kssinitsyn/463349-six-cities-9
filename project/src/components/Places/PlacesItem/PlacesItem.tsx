import {Link} from 'react-router-dom';
import {PlaceListItem} from '../../../types/PlacesType';

function PlacesItem({itemData}: PlaceListItem) {
  const premiumTagLayout = (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  return (
    <article className="cities__place-card place-card">
      {itemData.isPremium ? premiumTagLayout : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={'/'}>
          <img className="place-card__image" src={itemData.previewImage} width="260" height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{itemData.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{itemData.priceText}</span>
          </div>
          <button className={`place-card__bookmark-button ${itemData.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{itemData.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${(itemData.rating / 5) * 100  }%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={'/'}>{itemData.title}</Link>
        </h2>
        <p className="place-card__type">{itemData.type}</p>
      </div>
    </article>
  );
}

export default PlacesItem;
