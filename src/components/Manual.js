import React from 'react';
import styled from 'styled-components';
import manualImg from '../Image/manualImg.png';

const Container = styled.section`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 700px;
`;

const TextContainer = styled.div`
  margin-bottom: 20px;
`;

const IconContainer = styled.div``;

const TextBox = styled.div`
  p {
    padding-bottom: 5px;
    font-size: 15px;
  }
  span {
    font-size: 20px;
    font-weight: bold;
  }
`;

const IconBox = styled.div`
  img {
    height: 500px;
  }
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export default function Manual() {
  return (
    <Container>
      <TextContainer>
        <TextBox>
          <Title>User Manual</Title>
          <p>
            <span>User Manual</span>을 통해 구성의 간단한 실행부터,
            <span>Open-Source</span>를 활용한 구성에 관련하여 조금 더 세부적인
            정보를 확인 하실 수 있으며
          </p>
          <p>
            향후 적용 될 기능들에 관련한 <span>Feature Set</span>과{' '}
            <span>RoadMap</span>을 확인 하실 수 있습니다.
          </p>
        </TextBox>
      </TextContainer>
      <IconContainer>
        <IconBox>
          <img src={manualImg} />
        </IconBox>
      </IconContainer>
    </Container>
  );
}
