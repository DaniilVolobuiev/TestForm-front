import React from 'react';
import styled from 'styled-components';
import pinkUp from '../../assets/images/pink_up.png';
import yellowDown from '../../assets/images/yellow_down.png';
import map from '../../assets/images/map.png';
import mapWithFaces from '../../assets/images/map_with_faces.png';

const MapWrapper = styled.div`
  width: fit-content;
  margin-bottom: 1rem;
  @media (max-width: 950px) {
    display: none;
  }
`;

const Map = () => {
  return (
    <>
      <MapWrapper>
        <img src={mapWithFaces} />
        {/* <img src={map} />
        <PinkFace>
          <img src={pinkUp} />
        </PinkFace>
        <YellowFace>
          <img src={yellowDown} />
        </YellowFace> */}
      </MapWrapper>
    </>
  );
};

export default Map;
