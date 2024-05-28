import styled from "styled-components";
import useCountdown from "../hooks/useCountDown";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { addGuestBook } from "../firebase/addGuestBook";
import AnimatedComponent from "../components/AnimatedComponent";
import GridImage from "../components/GridImage";
import ImageSwiper from "../components/ImageSwiper";

const MainPage = () => {
  const { days, hours, minutes, seconds, isOverDay } = useCountdown(
    new Date("2024-09-21 00:00:00")
  );

  const [loading, setLoading] = useState(false);
  const [swiperIndex, setSwiperIndex] = useState(-1);

  const [guestBook, setGuestBook] = useState({ name: "", text: "", date: "" });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuestBook((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const guestBookCollection = collection(db, "guestBook");

  const onClickSendGuestBook = async () => {
    setLoading(true);
    await addGuestBook(guestBook);
    setLoading(false);
  };

  const onClickImage = (idx: number) => {
    setSwiperIndex(idx);
  };

  const onClickCloseSwiper = () => {
    setSwiperIndex(-1);
  };

  useEffect(() => {
    console.log(guestBook);
  }, [guestBook]);

  useEffect(() => {
    async function getGuestBook() {
      const data = await getDocs(guestBookCollection);
      const entries = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    }
    getGuestBook();
  }, []);

  return (
    <MainPageWrapper>
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

      <AnimatedComponent>
        <Box>
          저희는 이렇게 만났어요
          <p>사진</p>
        </Box>
      </AnimatedComponent>

      <AnimatedComponent>
        <Box>
          저희는 이렇게 만났어요
          <p>사진</p>
        </Box>
      </AnimatedComponent>

      <AnimatedComponent>
        <Box>
          저희는 이렇게 만났어요
          <p>사진</p>
        </Box>
      </AnimatedComponent>

      <GridImage onClickImage={onClickImage} />

      <Box1 />

      <Box1 />

      <Box1 />

      <Box1 />

      <Box1 />

      <Box1 />

      {swiperIndex >= 0 && (
        <ImageSwiper
          onClickCloseSwiper={onClickCloseSwiper}
          swiperIndex={swiperIndex}
        />
      )}

      <label>
        이름
        <input id="name" onChange={onChange} value={guestBook.name} />
      </label>
      <label>
        내용
        <input id="text" onChange={onChange} value={guestBook.text} />
      </label>
      <button onClick={onClickSendGuestBook}>보내기</button>
    </MainPageWrapper>
  );
};

export default MainPage;

const MainPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Box1 = styled.div`
  background-color: red;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #ccc;
  position: relative;
  margin-top: 10px;

  &::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: #76c7c0;
    animation: loading 1s infinite;
  }

  @keyframes loading {
    0% {
      left: 0%;
    }
    50% {
      left: 50%;
    }
    100% {
      left: 100%;
    }
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  p {
    width: 200px;
    height: 200px;
  }
`;
