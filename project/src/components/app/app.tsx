// Пока не сделал роутинг, оставлю, так как удобней все экраны смотреть
import MainScreen from '../screens/MainScreen/MainScreen';
// import MainEmptyScreen from '../screens/MainEmptyScreen/MainEmptyScreen';
// import FavoritesScreen from '../screens/FavoritesScreen/FavoritesScreen';
// import FavoritesEmptyScreen from '../screens/FavoritesEmptyScreen/FavoritesEmptyScreen';
// import PropertyScreen from '../screens/PropertyScreen/PropertyScreen';
// import PropertyNotLoggedScreen from '../screens/PropertyNotLoggedScreen/PropertyNotLoggedScreen';
// import LoginScreen from '../screens/LoginScreen/LoginScreen';

import {MainPropsType} from '../../types/MainPropsType';
import {TabsType} from '../../types/TabsType';
import {PlacesType} from '../../types/PlacesType';

function App(props: MainPropsType & TabsType & PlacesType): JSX.Element {
  return (
    // Пока не сделал роутинг, оставлю, так как удобней все экраны смотреть
    <MainScreen {...props}/>
    // <MainEmptyScreen {...props}/>
    // <FavoritesScreen />
    // <FavoritesEmptyScreen />
    // <PropertyScreen {...props}/>
    // <PropertyNotLoggedScreen {...props}/>
    // <LoginScreen />
  );

}

export default App;
