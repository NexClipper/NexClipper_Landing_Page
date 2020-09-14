import React from 'react';
import styled from 'styled-components';
import addrImg from '../Image/addrImg.png';
import mapIcon from '../Image/mapIcon.png';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  z-index: 1;
  position: relative;
  background-color: #fff;
`;

const AddrContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MapIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    padding-top: 128px;
  }
`;

const AddrText = styled.div`
  margin-bottom: 20px;
  p {
    padding-bottom: 5px;
    font-size: 15px;
  }
`;

const AddrImg = styled.div``;

const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export default function Content() {
  return (
    <Container>
      <AddrContainer>
        <AddrText>
          <Title>Content</Title>
          <p>우)06192, (주)넥스클라우드, 서울 강남구 선릉로 428 WeWork 11층</p>
          <p>
            Tel: +82-2-533-8622 Fax: +82-2-533-8623 e-mail:
            nexcloud@nexcloud.co.kr
          </p>
          <p>Github: https://github.com/nexClipper</p>
        </AddrText>
        <AddrImg>
          <img src={addrImg} />
        </AddrImg>
      </AddrContainer>
      <MapIconContainer>
        <img src={mapIcon} />
      </MapIconContainer>
    </Container>
  );
}
