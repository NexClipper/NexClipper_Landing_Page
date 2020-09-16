import React from 'react';
import styled from 'styled-components';
import k8s from '../Image/k8s.png';

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
    flex-direction: column;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1440px) {
    width: 1200px;
    img {
      height: 250px;
    }
  }
  @media (max-width: 768px) {
    img {
      height: 200px;
    }
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
  }
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 25px;
  }
`;

export default function Whatwe({ id }) {
  return (
    <Container id={id}>
      <IconContainer>
        <IconBox>
          <img src={k8s} />
        </IconBox>
      </IconContainer>
      <TextContainer>
        <TextBox>
          <Title>Kubernetes without Prometheus?</Title>
          <p>
            <span>Cloud-native</span>로의 전화에 있어서 <span>Kubernetes</span>
            는 이를 가속화 시키며 많은 역할을 담당 해 오고 있습니다.
          </p>
          <p>
            컨테이너 시스템의 배포와 확장/관리 부분에 있어서 매우 중요한 부분을
            담당함으로 인해 우리는 기존과 다르게
          </p>
          <p>시스템을 설계하고 배포 할 수 있게 된 것이지요.</p>
          <br />
          <br />
          <p>그럼에도 불구하고 서비스 운영시 많은 부분에 사람의</p>
          <p>
            개입이 필요한 부분은 아직 우리가 더 풀어 나가야 할 과제 아닐까
            생각합니다.
          </p>
          <p>그런 부분에 있어서 우리는 역할을 또 나누어 생각하고자 합니다.</p>
          <br />
          <br />
          <p>
            <span>Kubernetes</span>에 의해 배포, 관리 된 컨테이너 시스템의 내부
            상태를 확인하고 추적하여 상황 또는 반응에 따라
          </p>
          <p>
            그것을 자동으로 관리 할 수 있게 하는 것! 클라우드-네이티브 환경의
            운영을 자유롭게 하는것.
          </p>
          <p>그것이 우리가 풀어 나가고자 하는 새로운 미션으로 정해졌습니다.</p>
          <br />
          <br />
          <p>
            <span>Prometheus</span>를 활용하면, <span>Kubernetes</span>를 통해
            시스템 운영에 필요한 Metric Data를 수집 할 수 있게 되며
          </p>
          <p>
            이를 기반으로 Pattern 화 된 동작을 수행하여 다양한 운영 기법을 적용
            할 수 있게 됩니다.
          </p>
          <br />
          <br />
          <p>
            <span>NexCloud</span>는 이 Metric Data를 기반으로 클라우드-네이티브
            영역의 운영 자동화 체계를 구축하고 합니다.
          </p>
          <p>
            <span>NexClipper</span>의 새로운 도전! Managed Prometheus SaaS
            솔루션을 공개합니다!
          </p>
        </TextBox>
      </TextContainer>
    </Container>
  );
}
