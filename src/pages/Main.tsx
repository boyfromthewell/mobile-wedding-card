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
import StickySlider from "../components/StickySlider";
import Notice from "../components/Notice";

const LazySwiper = lazy(() => import("../components/ImageSwiper"));

const MainPage = () => {
  const [swiperIndex, setSwiperIndex] = useState(-1);
  const [showMore, setShowMore] = useState(false);

  const onClickShowMore = () => setShowMore(true);

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
      <StickySlider />
      <GridImage
        onClickImage={onClickImage}
        onClickShowMore={onClickShowMore}
        isShowMore={showMore}
      />
      <Suspense fallback={null}>
        {swiperIndex >= 0 && (
          <LazySwiper
            onClickCloseSwiper={onClickCloseSwiper}
            swiperIndex={swiperIndex}
            isShowMore={showMore}
          />
        )}
      </Suspense>
      <Map />
      <Dday />
      <GuestBook />
      <Notice />
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
