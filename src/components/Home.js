import React from 'react';
import styled from 'styled-components';
import top_img from '../Image/top_img.png';

const Container = styled.section`
  position: sticky;
  z-index: 0;
  background-color: #000033;
  width: 100%;
  height: 750px;
  top: 50px;
`;

const TextContent = styled.div``;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0 30px 0;
`;

const ImgContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 550px;
  }
`;

const MainText = styled.p`
  color: #fff;
  font-size: 30px;
  margin-bottom: 15px;
`;

const SubText = styled.p`
  color: #fff;
  font-size: 20px;
`;

export default function Home() {
  return (
    <Container>
      <TextContent>
        <TextBox>
          <MainText>Are you okay with your Kubersetes?</MainText>
          <SubText>Kubersetes without Prometheus?</SubText>
        </TextBox>
      </TextContent>
      <ImgContent>
        <img src={top_img} />
      </ImgContent>
    </Container>
  );
}
