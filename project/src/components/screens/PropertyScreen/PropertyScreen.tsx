import React from 'react';
import Header from '../../Header/Header';
import Property from '../../Property/Property';
import PlacesList from '../../Places/PlacesList/PlacesList';
import {MainPropsType} from '../../../types/MainPropsType';
import { OfferListType} from '../../../types/OfferType';
import { ReviewsListType } from '../../../types/ReviewsType';

function PropertyScreen({isLogin, offers, reviews}: MainPropsType & OfferListType & ReviewsListType) {
  return (
    <div className="page">
      <Header isLogin={isLogin}/>

      <main className="page__main page__main--property">
        <Property isLogin={isLogin} offers={offers} reviews={reviews}/>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList placesList={offers}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyScreen;
