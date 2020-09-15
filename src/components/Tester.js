import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1440px;
  height: 500px;
  margin: 0 auto;
  background-color: #fff;
  @media (max-width: 1440px) {
    width: 1200px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 800px;
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  margin-bottom: 20px;
`;

const TitleBox = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-size: 20px;
`;

const TesterText = styled.div`
  p {
    font-size: 15px;
    margin-bottom: 5px;
  }
`;

const BtnContainer = styled.div``;

const LinkBtn = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #000066;
  width: 150px;
  height: 50px;
  cursor: pointer;
  a {
    color: #fff;
    font-size: 20px;
    text-decoration: none;
  }
`;

const GiftText = styled.p`
  margin-top: 50px;
  opacity: 0.7;
`;

export default function Tester() {
  return (
    <Container>
      <TextContainer>
        <TitleBox>
          <Title>클로즈드 베타 테스터 모집!</Title>
          <SubTitle>
            관리형 Prometheus 서비스인 NexClipper 1.0의 서비스 오픈과 관련하여
            베타 테스터가 되어주실 분들의 모집을 진행합니다!
          </SubTitle>
        </TitleBox>
        <TesterText>
          <p>- 모집 기간 : ~ 2020년 9월 25일까지</p>
          <p>- 베타 테스트 기간 : 2020년 10월 6일 ~ 2020년 10월 19일(2주간)</p>
          <p>- 대상 : 참가자 중 20명 선정(선정 된 대상자는 이메일 개별 통보)</p>
        </TesterText>
      </TextContainer>
      <BtnContainer>
        <LinkBtn>
          <a href="https://forms.gle/n62x1RTLaw7kUYHX8">참가 신청</a>
        </LinkBtn>
      </BtnContainer>
      <GiftText>
        * 테스트 기간 동안 사용기 또는 피드백을 전달 해주신 분들을 추첨하여
        소정의 상품을 발송해 드립니다. 많은 분들의 참여 부탁 드립니다!
      </GiftText>
    </Container>
  );
}
