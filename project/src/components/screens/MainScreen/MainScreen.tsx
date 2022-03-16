import Header from '../../Header/Header';
import Tabs from '../../Tabs/Tabs';
import Map from '../../Map/Map';
import Places from '../../Places/Places';
import {MainPropsType} from '../../../types/MainPropsType';
import {TabsType} from '../../../types/TabsType';
import { OfferListType, PlaceListType } from '../../../types/OfferType';

function MainScreen(props: MainPropsType & TabsType & PlaceListType & OfferListType) {
  // eslint-disable-next-line no-console
  console.log('props', props);

  return (
    <div className="page page--gray page--main">
      <Header isLogin={props.isLogin}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs tabs={props.tabs}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <Places cityName={props.cityName}
                places={props.places}
                placesList={props.placesList}
              />
            </section>
            <div className="cities__right-section">
              <div className='cities__map'>
                <Map offers={props.offers}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
