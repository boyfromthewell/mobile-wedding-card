import styled from "styled-components";
import useCountdown from "../hooks/useCountDown";

const MainPage = () => {
  const { days, hours, minutes, seconds, isOverDay } = useCountdown(
    new Date("2024-09-21 00:00:00")
  );

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
    </MainPageWrapper>
  );
};

export default MainPage;

const MainPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
