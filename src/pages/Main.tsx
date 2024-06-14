import styled from "styled-components";
import { useState } from "react";
import GridImage from "../components/GridImage";
import ImageSwiper from "../components/ImageSwiper";
import Map from "../components/Map";
import MainBanner from "../components/MainBanner";
import SubBanner from "../components/SubBanner";
import OurInfo from "../components/OurInfo";
import BottomBanner from "../components/BottomBanner";
import Dday from "../components/Dday";
import GuestBook from "../components/GuestBook";
import Account from "../components/Account";

const MainPage = () => {
  const [swiperIndex, setSwiperIndex] = useState(-1);

  const onClickImage = (idx: number) => {
    setSwiperIndex(idx);
  };

  const onClickCloseSwiper = () => {
    setSwiperIndex(-1);
  };

  return (
    <MainPageWrapper>
      <MainBanner />
      <SubBanner />
      <OurInfo />
      <GridImage onClickImage={onClickImage} />
      {swiperIndex >= 0 && (
        <ImageSwiper
          onClickCloseSwiper={onClickCloseSwiper}
          swiperIndex={swiperIndex}
        />
      )}
      <Map />
      <Dday />
      <GuestBook />
      <Account />
      <BottomBanner />
    </MainPageWrapper>
  );
};

export default MainPage;

const MainPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
