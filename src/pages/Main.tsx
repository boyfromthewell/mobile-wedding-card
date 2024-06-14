import styled from "styled-components";
import useCountdown from "../hooks/useCountDown";
import React, { useState } from "react";
import { addGuestBook } from "../firebase/addGuestBook";

import GridImage from "../components/GridImage";
import ImageSwiper from "../components/ImageSwiper";
import Map from "../components/Map";
import LocationButton from "../components/LocationButton";
import Alert from "../components/Alert";
import MainBanner from "../components/MainBanner";
import SubBanner from "../components/SubBanner";
import OurInfo from "../components/OurInfo";
import BottomBanner from "../components/BottomBanner";

const MainPage = () => {
  const { days, hours, minutes, seconds, isOverDay } = useCountdown(
    new Date("2024-09-21 00:00:00")
  );

  const [isSucessGuestBook, setIsSucessGuestBook] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [swiperIndex, setSwiperIndex] = useState(-1);

  const [guestBook, setGuestBook] = useState({ name: "", text: "", date: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuestBook((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const resetGuestBook = () => {
    setGuestBook({ name: "", text: "", date: "" });
  };

  const onClickSendGuestBook = async () => {
    setIsLoading(true);
    const isSuccess = await addGuestBook(guestBook);
    if (isSuccess) {
      setIsLoading(false);
      setIsSucessGuestBook(true);
      resetGuestBook();
    }
  };

  const onClickImage = (idx: number) => {
    setSwiperIndex(idx);
  };

  const onClickCloseSwiper = () => {
    setSwiperIndex(-1);
  };

  const onClickCloseAlert = () => {
    setIsSucessGuestBook(false);
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
      <LocationButton />

      {!isOverDay ? "떠녕 뚜뇽 결혼까지" : "떠녕 뚜뇽 결혼이"}
      <div
        style={{
          width: "100%",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!isOverDay
          ? `${days}일 ${hours}시간 ${minutes}분 ${seconds}초 남았습니다~`
          : `${days}일 ${hours}시간 ${minutes}분 ${seconds}초 지났습니다~`}
      </div>
      <p>방명록</p>
      <label>
        이름
        <input id="name" onChange={onChange} value={guestBook.name} />
      </label>
      <label>
        내용
        <input id="text" onChange={onChange} value={guestBook.text} />
      </label>
      {!isLoading ? (
        <button onClick={onClickSendGuestBook}>보내기</button>
      ) : (
        <ProgressBar />
      )}
      {isSucessGuestBook && <Alert onClickCloseAlert={onClickCloseAlert} />}
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

const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12px;
  border-radius: 8px;
  background-color: #ececec;
  position: fixed;
  bottom: 0;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 70%;
    height: 12px;
    border-radius: 8px;
    background-color: #f8c8c4;
    animation: loading 1.5s infinite ease-in-out;
  }

  @keyframes loading {
    0% {
      left: -50%;
    }
    50% {
      left: 100%;
    }
    100% {
      left: 100%;
    }
  }
`;
