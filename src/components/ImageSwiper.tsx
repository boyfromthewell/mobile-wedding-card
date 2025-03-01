import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import styled from "styled-components";
import CloseSVG from "../assets/icons/close.svg?react";

import { IMAGE_ORIGIN } from "../mock/image_origin";
import useDisableBodyScroll from "../hooks/useDisabledBodyScroll";

interface ImageSwiperProps {
  onClickCloseSwiper: () => void;
  swiperIndex: number;
  isShowMore: boolean;
}

const ImageSwiper = ({
  onClickCloseSwiper,
  swiperIndex,
  isShowMore,
}: ImageSwiperProps) => {
  useDisableBodyScroll();

  return (
    <Wrapper>
      <ButtonContainer>
        <CloseSVG onClick={onClickCloseSwiper} />
      </ButtonContainer>

      <Swiper
        loop
        slidesPerView={1}
        initialSlide={swiperIndex}
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        className="swiper_img"
        allowTouchMove
      >
        {IMAGE_ORIGIN.slice(0, isShowMore ? IMAGE_ORIGIN.length : 33).map(
          ({ src, alt }) => (
            <SwiperSlide key={alt}>
              <SwiperImage src={src} alt={alt} loading="lazy" />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </Wrapper>
  );
};

export default ImageSwiper;

const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  position: fixed;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  overscroll-behavior: none;
  .swiper_img {
    width: 100%;
    height: 70%;
    z-index: 1200;
    background-color: #fff;
  }

  .swiper-scrollbar {
    background-color: #efebe0;
    .swiper-scrollbar-drag {
      background-color: #fb8da0;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 27px;

  p {
    margin-left: 10px;
    color: #fff;
    font-size: 1.225rem;
  }

  svg {
    margin-right: 10px;
    cursor: pointer;
    width: 48px;
    height: 48px;
    path {
      fill: #fff;
    }
  }
`;

const SwiperImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
`;
