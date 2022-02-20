import {Link} from 'react-router-dom';

function Locations() {
  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to={'/'}>
          <span>Amsterdam</span>
        </Link>
      </div>
    </section>
  );
}

export default Locations;
