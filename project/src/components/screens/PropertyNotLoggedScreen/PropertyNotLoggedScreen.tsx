import React from 'react';
import Property from '../../Property/Property';
import PlacesList from '../../Places/PlacesList/PlacesList';
import Header from '../../Header/Header';
import { OfferListType } from '../../../types/OfferType';
import { ReviewsListType } from '../../../types/ReviewsType';


function PropertyNotLoggedScreen({offers, reviews}: OfferListType & ReviewsListType) {
  return (
    <div className="page">
      <Header isLogin={false}/>

      <main className="page__main page__main--property">
        <Property isLogin={false} offers={offers} reviews={reviews}/>
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

export default PropertyNotLoggedScreen;
