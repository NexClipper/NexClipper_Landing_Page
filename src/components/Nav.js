import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import NexLogo from '../Image/NexLogo.png';

const Header = styled.section`
  position: sticky;
  top: 0;
  z-index: 2;
  width: 1440px;
  height: 50px;
  margin: 0 auto;
  @media (max-width: 1440px) {
    width: 1200px;
  }
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Navigator = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #000033, #000066, #000033);
  @media (max-width: 1440px) {
    width: 1200px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const LogoContainer = styled.div`
  height: 100%;
  margin-left: 40px;
  @media (max-width: 768px) {
    height: 45px;
  }
`;

const LogoBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    height: 35px;
  }
`;

const MenuBox = styled.div`
  width: 500px;
  height: 100%;
  margin-right: 50px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 75px;
  }
`;

const MenuList = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 90%;
    flex-direction: column;
  }
`;

const MoveList = styled(Link)`
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
`;

const DocsLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
`;

const SignInBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 30px;
  background-color: #fff;
  border-radius: 25px;
  a {
    text-decoration: none;
    color: #000066;
    font-size: 15px;
    font-weight: bold;
  }
`;

export default function Nav() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Header>
      <Navigator>
        <LogoContainer>
          <LogoBox onClick={scrollToTop}>
            <img src={NexLogo} />
          </LogoBox>
        </LogoContainer>
        <MenuBox>
          <MenuList>
            <div>
              <MoveList
                activeClass="active"
                to="whatwe"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                NexClipper?
              </MoveList>
            </div>
            <div>
              <MoveList
                activeClass="active"
                to="product"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Product
              </MoveList>
            </div>
            <div>
              <DocsLink href="https://nexclipper.github.io/docs/" target="_blank">
                Docs
              </DocsLink>
            </div>
            <div>
              <DocsLink href="https://support@nexclipper.io" target="_blank">Support</DocsLink>
            </div>
            <SignInBox>
              <a href="https://console.nexclipper.io" target="_blank">Sign In</a>
            </SignInBox>
          </MenuList>
        </MenuBox>
      </Navigator>
    </Header>
  );
}
