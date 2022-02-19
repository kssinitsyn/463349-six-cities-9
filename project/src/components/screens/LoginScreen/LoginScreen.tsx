import Header from '../../Header/Header';
import Login from '../../Login/Login';
import Locations from '../../Locations/Locations';

function LoginScreen() {
  return (
    <div className="page page--gray page--login">
      <Header isLogin={false}/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <Login />
          <Locations />
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
