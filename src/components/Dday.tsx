import styled from "styled-components";
import useCountdown from "../hooks/useCountDown";

const Dday = () => {
  const { days, hours, minutes, seconds, isOverDay } = useCountdown(
    "2024-09-21 00:00:00"
  );

  return (
    <DdayContainer>
      <Date>
        <p>2024. 09. 21</p>
        <span>토요일 오후 5시</span>
      </Date>
      <Divider />
      <Counter>
        <TimeBox>
          <p>DAYS</p>
          <span>{days}</span>
        </TimeBox>
        <TimeBox>
          <p>HOUR</p>
          <span>{hours}</span>
        </TimeBox>
        <TimeBox>
          <p>MIN</p>
          <span>{minutes}</span>
        </TimeBox>
        <TimeBox>
          <p>SEC</p>
          <span>{seconds}</span>
        </TimeBox>
      </Counter>
      <Text>
        순용, 선영의 결혼식이{" "}
        {!isOverDay ? (
          <span>
            <span style={{ color: "#f98d99" }}>{days + 1}</span>일 남았습니다.
          </span>
        ) : (
          <span>
            <span style={{ color: "#f98d99" }}>{days + 1}</span>일 지났습니다.
          </span>
        )}
      </Text>
    </DdayContainer>
  );
};

export default Dday;

const DdayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`;

const Divider = styled.div`
  width: 80%;
  background-color: #eee;
  height: 1px;
  margin: 30px 0 30px 0;
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-text-stroke: 0.2px;
  gap: 8px;
  p {
    font-size: 1.725rem;
    color: #47494d;
  }
  span {
    font-size: 1.325rem;
    color: #544f4f;
  }
`;

const Counter = styled.div`
  display: flex;
  gap: 20px;
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Crimson";
  gap: 7px;
  p {
    color: #2b2222;
    opacity: 0.4;
    font-size: 0.875rem;
  }
  span {
    color: #2b2222;
    opacity: 0.8;
    font-size: 1.375rem;
  }
`;

const Text = styled.p`
  font-size: 1.075rem;
  margin-top: 20px;
  color: #666;
  -webkit-text-stroke: 0.2px;
`;
