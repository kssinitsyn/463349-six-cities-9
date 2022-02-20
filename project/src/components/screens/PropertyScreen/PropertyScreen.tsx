import React from 'react';
import Header from '../../Header/Header';
import Property from '../../Property/Property';
import PlacesList from '../../Places/PlacesList/PlacesList';
import {PlacesType} from '../../../types/PlacesType';
import {MainPropsType} from '../../../types/MainPropsType';

function PropertyScreen({placesList, isLogin}: PlacesType & MainPropsType) {
  return (
    <div className="page">
      <Header isLogin={isLogin}/>

      <main className="page__main page__main--property">
        <Property isLogin={isLogin}/>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList placesList={placesList}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyScreen;
