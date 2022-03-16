import { OfferType } from './../types/OfferType';
import { MutableRefObject, useEffect, useState } from 'react';
import {Map, TileLayer} from 'leaflet';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: Pick<OfferType, 'city'>,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const cityData = city.city;

  useEffect(() => {
    if (mapRef.current === null) {
      return;
    }

    const instance = new Map(mapRef.current, {
      center: {
        lat: cityData.location.latitude,
        lng: cityData.location.longitude,
      },
      zoom: cityData.location.zoom,
    });

    const layer = new TileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      },
    );

    instance.addLayer(layer);

    setMap(instance);
  }, [mapRef, cityData]);

  return map;
}

export default useMap;
