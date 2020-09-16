import React from 'react';
import styled from 'styled-components';
import productImg from '../Image/productImg.png';

const Container = styled.section`
  display: flex;
  width: 1440px;
  height: 700px;
  margin: 0 auto;
  background-color: #fff;
  padding: 15px;
  @media (max-width: 1440px) {
    width: 1200px;
  }
  @media (max-width: 768px) {
    width: 95%;
    height: 800px;
    margin-top: 50px;
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

const TextBox = styled.div`
  p {
    padding-bottom: 5px;
    font-size: 15px;
  }
  span {
    font-size: 20px;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 30px 0 10px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
    height: 50%;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 450px;
  }
  @media (max-width: 1440px) {
    width: 1200px;
    img {
      height: 400px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    img {
      height: 300px;
    }
  }
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export default function Product({ id }) {
  return (
    <Container id={id}>
      <TextContainer>
        <TextBox>
          <Title>How to Work with NexClipper</Title>
          <p>
            <span>NexClipper</span>는 <span>Open-Source</span>를 직접
            contribution 하고 있으며,
          </p>
          <p>
            상당 수의 많은 <span>Open_Source</span>를 활용하여 논리적인 구성을
            통해 서비스를 만들어 가고 있습니다.
          </p>
          <br />
          <br />
          <p>
            고객은 <span>NexClipper</span>를 통해 제공되는 간단한 명령어 한 줄을
            통해 다양한 <span>Open-Source</span> 구성을 상황에 맞게
          </p>
          <p>적시, 적절하게 설치/관리 할 수 있도록 설계 되었습니다.</p>
          <br />
          <br />
          <p>
            이와 관련하여, 좀 더 확장되고 편리한 기능들을 적용 해 나갈
            예정입니다.
          </p>
        </TextBox>
      </TextContainer>
      <IconContainer>
        <IconBox>
          <img src={productImg} />
        </IconBox>
      </IconContainer>
    </Container>
  );
}
