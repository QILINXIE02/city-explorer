import React from 'react';

const Title = ({ location }) => {
  return (
    <>
      {
        location.display_name ?
          <section>
            <h4>Location Information For: {location.display_name}</h4>
          </section>
        : null
      }
    </>
  );
}

export default Title;
