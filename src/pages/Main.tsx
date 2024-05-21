import styled from "styled-components";
import useCountdown from "../hooks/useCountDown";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { addGuestBook } from "../firebase/addGuestBook";

const MainPage = () => {
  const { days, hours, minutes, seconds, isOverDay } = useCountdown(
    new Date("2024-09-21 00:00:00")
  );

  const [guestBook, setGuestBook] = useState({ name: "", text: "", date: "" });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuestBook((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const guestBookCollection = collection(db, "guestBook");

  const onClick = () => {
    addGuestBook(guestBook);
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
      console.log(entries);
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
      <label>
        이름
        <input id="name" onChange={onChange} value={guestBook.name} />
      </label>
      <label>
        내용
        <input id="text" onChange={onChange} value={guestBook.text} />
      </label>
      <button onClick={onClick}>보내기</button>
    </MainPageWrapper>
  );
};

export default MainPage;

const MainPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
