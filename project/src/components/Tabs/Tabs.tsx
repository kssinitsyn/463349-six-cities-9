type mainPropsType = {
  tabs:
    {
      name: string,
      isActive: boolean
    }[]
};

function Tabs({tabs}: mainPropsType) {
  return (
    <div className="tabs">
      <div>
      </div>
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {tabs.map((item) => (
            <li className="locations__item" key={item.name}>
              <a className={`locations__item-link tabs__item ${item.isActive ? 'tabs__item--active' : ''}`} href="#">
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
