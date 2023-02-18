import React from 'react';
import styled from 'styled-components';
import linkedin from '../../assets/icons/linkedin.png';
import facebook from '../../assets/icons/facebook.png';
import pinterest from '../../assets/icons/pinterest.png';
import twitter from '../../assets/icons/twitter.png';
import pinkUp from '../../assets/images/pink_up.png';
import greenDown from '../../assets/images/green_down.png';
import yellowUp from '../../assets/images/yellow_up.png';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 200px;

  background-color: #fafafa;
  border-top: 1px;
  border-color: #d8d8d8;
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;

  overflow: hidden;
  width: 40%;
  @media (max-width: 750px) {
    min-width: 100px;
  }
`;

const FooterRight = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 40%;
  overflow: hidden;
`;

const PinkImage = styled.div`
  position: relative;
  bottom: -20px;
  flex-shrink: 0;
  @media (max-width: 750px) {
    width: 170px;
    bottom: -60px;
  }
  @media (max-width: 450px) {
    width: 100px;
    bottom: -70px;
  }
`;

const GreenImage = styled.div`
  position: absolute;
  top: 0;
  right: 70%;
  @media (max-width: 750px) {
    width: 50px;
  }
  @media (max-width: 450px) {
    right: 60%;
  }
`;

const YellowImage = styled.div`
  position: absolute;
  right: -30px;
  @media (max-width: 750px) {
    width: 100px;
  }
`;

const Contacts = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 35%;
  gap: 25px;
  min-width: 126px;
  z-index: 100;
  @media (max-width: 750px) {
    position: absolute;
    right: 55%;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <FooterLeft>
        <PinkImage>
          <img src={pinkUp} alt="" />
        </PinkImage>

        <Contacts>
          <li>
            <img src={linkedin} />
          </li>
          <li>
            <img src={twitter} />
          </li>
          <li>
            <img src={facebook} />
          </li>
          <li>
            <img src={pinterest} />
          </li>
        </Contacts>
      </FooterLeft>
      <FooterRight>
        <GreenImage>
          <img src={greenDown} />
        </GreenImage>
        <YellowImage>
          <img src={yellowUp} />
        </YellowImage>
      </FooterRight>
    </Wrapper>
  );
};

export default Footer;
