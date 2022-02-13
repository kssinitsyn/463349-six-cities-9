// import PropertyNotLoggedScreen from '../screens/PropertyNotLoggedScreen/PropertyNotLoggedScreen';
import MainScreen from '../screens/MainScreen/MainScreen';

type mainPropsType = {
  city: string,
  places: number,
  openSort: boolean,
  tabs: {
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

function App(props: mainPropsType): JSX.Element {
  return <MainScreen {...props}/>;
}

export default App;
