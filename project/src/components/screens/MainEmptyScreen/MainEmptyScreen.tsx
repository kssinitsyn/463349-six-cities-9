import Header from '../../Header/Header';
import Tabs from '../../Tabs/Tabs';
import NoPlaces from '../../NoPlaces/NoPlaces';
import {TabsType} from '../../../types/TabsType';


function MainEmptyScreen(props: TabsType) {
  return (
    <div className="page page--gray page--main">
      <Header isLogin/>

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs tabs={props.tabs}/>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <NoPlaces />
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainEmptyScreen;
