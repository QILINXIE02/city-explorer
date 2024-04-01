import React from 'react';
import { When } from 'react-if';

const Map = ({ location, accessToken }) => {
  return (
    <When condition={location.lat && location.lon}>
      <section>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${accessToken}&center=${location.lat},${location.lon}&size=500x440&zoom=10`} />
      </section>
    </When>
  );
}

export default Map;
