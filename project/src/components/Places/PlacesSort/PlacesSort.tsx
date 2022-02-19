import React, { useState } from 'react';

function PlacesSort() {
  const [isOpen, setIsOpen] = useState(false);
  // Открытие надо делать тут через событие на клик по названию сортировки, пока не получилось, сделал через пропс
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" onClick={() => setIsOpen(!isOpen)}>
                  Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        <li className="places__option places__option--active">Popular</li>
        <li className="places__option">Price: low to high</li>
        <li className="places__option" >Price: high to low</li>
        <li className="places__option" >Top rated first</li>
      </ul>
    </form>
  );
}

export default PlacesSort;
