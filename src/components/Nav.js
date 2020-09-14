import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import NexLogo from '../Image/NexLogo.png';

const Header = styled.header`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 50px;
`;

const Navigator = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #000033, #000066, #000033);
`;

const LogoContainer = styled.div`
  width: 300px;
  height: 100%;
`;

const LogoBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    cursor: pointer;
  }
`;

const MenuBox = styled.div`
  width: 500px;
  height: 100%;
  margin-right: 10%;
`;

const MenuList = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MoveList = styled(Link)`
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
`;

const SignInContain = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  height: 100%;
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
            <li>
              <MoveList
                activeClass="active"
                to="whatwe"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                What we're
              </MoveList>
            </li>
            <li>
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
            </li>
            <li>
              <MoveList
                activeClass="active"
                to="manual"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Manual
              </MoveList>
            </li>
            <li>
              <MoveList
                activeClass="active"
                to="content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Content
              </MoveList>
            </li>
          </MenuList>
        </MenuBox>
        <SignInContain>
          <SignInBox>
            <a href="https://console.nexclipper.io">Sign In</a>
          </SignInBox>
        </SignInContain>
      </Navigator>
    </Header>
  );
}
