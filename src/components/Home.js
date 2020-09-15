import React from 'react';
import styled from 'styled-components';
import top_img from '../Image/top_img.png';

const Container = styled.section`
  background-color: #000033;
  width: 1440px;
  height: 750px;
  margin: 0 auto;
  @media (max-width: 1440px) {
    width: 1200px;
  }
  @media (max-width: 768px) {
    width: 95%;
    height: 450px;
    margin-top: 150px;
  }
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
  @media (max-width: 768px) {
    img {
      height: 300px;
    }
  }
`;

const MainText = styled.p`
  color: #fff;
  font-size: 30px;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SubText = styled.p`
  color: #fff;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export default function Home() {
  return (
    <Container>
      <TextContent>
        <TextBox>
          <MainText>Are you okay with your Kubernetes?</MainText>
          <SubText>Kubernetes without Prometheus?</SubText>
        </TextBox>
      </TextContent>
      <ImgContent>
        <img src={top_img} />
      </ImgContent>
    </Container>
  );
}
