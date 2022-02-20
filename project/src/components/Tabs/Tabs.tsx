import {Link} from 'react-router-dom';

import {TabsType} from '../../types/TabsType';

function Tabs({tabs}: TabsType) {
  return (
    <div className="tabs">
      <div>
      </div>
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {tabs.map((item) => (
            <li className="locations__item" key={item.name}>
              <Link className={`locations__item-link tabs__item ${item.isActive ? 'tabs__item--active' : ''}`} to={'/'}>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
