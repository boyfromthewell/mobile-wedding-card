import styled from "styled-components";
import Naver from "/navermap.png";
import Kakao from "/kakaomap.png";

const NAVER_LINK =
  "https://map.naver.com/p/directions/-/14144798.4962809,4511184.9327563,%EB%85%B8%EB%B8%94%EB%B0%9C%EB%A0%8C%ED%8B%B0%20%EC%82%BC%EC%84%B1%EC%A0%90,12390329,PLACE_POI/-/transit?c=15.00,0,0,0,dh";
const KAKAO_LINK =
  "https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=%2C%2C514329%2C1115516&rt1=&rt2=%EB%85%B8%EB%B8%94%EB%B0%9C%EB%A0%8C%ED%8B%B0+%EC%82%BC%EC%84%B1&rtIds=%2C&rtTypes=%2C";

const LocationButton = () => {
  const onClickButton = (type: "naver" | "kakao") => {
    switch (type) {
      case "naver":
        window.open(NAVER_LINK, "_blank");
        break;
      case "kakao":
        window.open(KAKAO_LINK, "_blank");
        break;
    }
  };

  return (
    <ButtonContainer>
      <LinkButton onClick={() => onClickButton("naver")}>
        <img src={Naver} alt="네이버 지도 로고" />
        네이버 지도
      </LinkButton>
      <LinkButton onClick={() => onClickButton("kakao")}>
        <img src={Kakao} alt="카카오 맵 로고" />
        카카오 맵
      </LinkButton>
    </ButtonContainer>
  );
};

export default LocationButton;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
`;

const LinkButton = styled.button`
  font-size: 1rem;
  font-family: "gowun dodum", sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 7px;
  img {
    width: 15px;
    height: 15px;
  }
`;
