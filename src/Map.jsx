// In Map.jsx
import React from 'react';
import { When } from 'react-if';

const Map = ({ location, accessToken }) => {
  return (
    <When condition={location.lat && location.lon}>
      <section className="text-center">
        <img
          className="img-fluid rounded"
          src={`https://maps.locationiq.com/v3/staticmap?key=${accessToken}&center=${location.lat},${location.lon}&size=600x400&zoom=13`}
          alt="Map"
        />
      </section>
    </When>
  );
}

export default Map;
