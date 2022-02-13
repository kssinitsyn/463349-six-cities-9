import React from 'react';
import Header from '../../Header/Header';
import Property from '../../Property/Property';
// import PlacesList from '../../Places/PlacesList/PlacesList';

function PropertyScreen() {
  return (
    <div className="page">
      <Header isLogin/>

      <main className="page__main page__main--property">
        <Property isLogin/>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            {/*<PlacesList />*/}
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyScreen;
