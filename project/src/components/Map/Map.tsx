import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { OfferListType } from '../../types/OfferType';

const PIN_SRC = './img/pin.svg';
const pin = new leaflet.Icon({
  iconUrl: PIN_SRC,
  iconSize: [32, 43],
  iconAnchor: [32, 43],
});

function Map({offers}: OfferListType) {
  const city = {city: offers[0].city};
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);


  useEffect(() => {
    if (map === null) {
      return;
    }

    offers.forEach((item) => leaflet
      .marker({
        lat: item.location.latitude,
        lng: item.location.longitude,
      })
      .setIcon(pin)
      .addTo(map),
    );
  }, [map, offers]);

  return <section className="map" style={{height: '100%'}} ref={mapRef}></section>;
}

export default Map;
