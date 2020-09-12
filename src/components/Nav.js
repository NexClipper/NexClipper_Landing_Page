import React from 'react';
import styled from 'styled-components';
import NexLogo from '../Image/NexLogo.png';

const Header = styled.header`
  position: fixed;
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
`;

const MenuList = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    display: inline;
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    cursor: pointer;
  }
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
  font-size: 17px;
  font-weight: bold;
  color: #000066;
`;

export default function Nav() {
  return (
    <Header>
      <Navigator>
        <LogoContainer>
          <LogoBox>
            <img src={NexLogo} />
          </LogoBox>
        </LogoContainer>
        <MenuBox>
          <MenuList>
            <li>What we're</li>
            <li>Product</li>
            <li>Manual</li>
            <li>Contact</li>
          </MenuList>
        </MenuBox>
        <SignInContain>
          <SignInBox>Sign In</SignInBox>
        </SignInContain>
      </Navigator>
    </Header>
  );
}
