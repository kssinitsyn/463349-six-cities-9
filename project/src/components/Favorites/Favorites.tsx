import FavoritesList from './FavoritesList/FavoritesList';

function Favorites() {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoritesList />
    </section>
  );
}

export default Favorites;
