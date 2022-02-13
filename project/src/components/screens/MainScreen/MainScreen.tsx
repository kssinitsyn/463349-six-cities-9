import Header from '../../Header/Header';
import Tabs from '../../Tabs/Tabs';
import Map from '../../Map/Map';
import Places from '../../Places/Places';

type mainPropsType = {
  city: string,
  places: number,
  tabs:
    {
      name: string,
      isActive: boolean
    }[],
  isLogin: boolean,
  placesList:
    {
      id: number,
      isFavorite: boolean,
      isPremium: boolean,
      previewImage: string,
      price: number,
      priceText: string,
      rating: number,
      title: string,
      type: string,
    }[],
};

function MainScreen(props: mainPropsType) {
  return (
    <div className="page page--gray page--main">
      <Header isLogin={props.isLogin}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs tabs={props.tabs}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <Places city={props.city}
                places={props.places}
                placesList={props.placesList}
              />
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
