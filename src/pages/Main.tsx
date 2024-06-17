import styled from "styled-components";
import { Suspense, lazy, useState } from "react";
import GridImage from "../components/GridImage";

import Map from "../components/Map";
import MainBanner from "../components/MainBanner";
import SubBanner from "../components/SubBanner";
import OurInfo from "../components/OurInfo";
import BottomBanner from "../components/BottomBanner";
import Dday from "../components/Dday";
import GuestBook from "../components/GuestBook";
import Account from "../components/Account";

const LazySwiper = lazy(() => import("../components/ImageSwiper"));

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
        <Suspense>
          <LazySwiper
            onClickCloseSwiper={onClickCloseSwiper}
            swiperIndex={swiperIndex}
          />
        </Suspense>
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
