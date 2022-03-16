import React from 'react';
import Gallery from '../Gallery/Gallery';
import Reviews from '../Reviews/Reviews';
import PropertyFeatures from './PropertyFeatures/PropertyFeatures';
import PropertyInside from './PropertyInside/PropertyInside';
import PropertyHost from './PropertyHost/PropertyHost';
import PropertyRating from './PropertyRating/PropertyRating';
import PropertyMap from './PropertyMap/PropertyMap';
import {MainPropsType} from '../../types/MainPropsType';
import { OfferListType } from '../../types/OfferType';

function Property({isLogin, offers}: MainPropsType & OfferListType) {
  return (
    <section className="property">
      <div className="property__gallery-container container">
        <Gallery />
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          <div className="property__mark">
            <span>Premium</span>
          </div>
          <div className="property__name-wrapper">
            <h1 className="property__name">
              Beautiful &amp; luxurious studio at great location
            </h1>
            <button className="property__bookmark-button button" type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <PropertyRating />
          <PropertyFeatures />
          <div className="property__price">
            <b className="property__price-value">&euro;120</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <PropertyInside />
          <PropertyHost />
          <Reviews isLogin={isLogin}/>
        </div>
      </div>
      <div className='property__map'>
        <PropertyMap offers={offers}/>
      </div>

    </section>
  );
}

export default Property;
