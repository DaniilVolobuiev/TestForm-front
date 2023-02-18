import React from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';
import styled from 'styled-components';
import Map from '../UI/Map';
import cloud from '../assets/images/cloud.png';
import sun from '../assets/images/sun.png';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(${cloud});
`;

const ContentTop = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100%;
  gap: 5rem;
  flex-grow: 1;
`;

const SunImage = styled.div`
  position: absolute;
  left: 50%;
  top: 21px;
`;

const Main = () => {
  return (
    <>
      <Content>
        <SunImage>
          <img src={sun} width="87px" />
        </SunImage>
        <ContentTop>
          <Form />
          <Map />
        </ContentTop>
        <Footer />
      </Content>
    </>
  );
};

export default Main;
