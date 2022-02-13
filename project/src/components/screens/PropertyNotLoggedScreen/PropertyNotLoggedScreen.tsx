import React from 'react';
import Property from '../../Property/Property';
// import PlacesList from '../../Places/PlacesList/PlacesList';
import Header from '../../Header/Header';


function PropertyNotLoggedScreen() {
  return (
    <div className="page">
      <Header isLogin={false}/>

      <main className="page__main page__main--property">
        <Property isLogin={false}/>
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

export default PropertyNotLoggedScreen;
