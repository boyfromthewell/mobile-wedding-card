import { useState } from "react";
import styled from "styled-components";
import SubmitModal from "./SubmitModal";
import Alert from "./Alert";

const Notice = () => {
  const [isOpenSubmit, setIsOpenSubmit] = useState(false);
  const [submitIsSucess, setIsSubmitSucess] = useState(false);

  return (
    <>
      <NoticeWrapper>
        <Title>
          <p>
            안내사항 <span style={{ fontSize: "0.825rem" }}>NOTICE</span>
          </p>
        </Title>
        <Text>
          식사가 양식 코스로 메인 메뉴인
          <br />
          안심 스테이크가 기본으로 준비되지만
          <br />
          <StyledSpan>도미</StyledSpan> 또는 <StyledSpan>떡갈비</StyledSpan>{" "}
          스테이크로 대체 가능하오니
          <br />
          변경을 희망하는 분들께서는
          <br />
          아래 신청하기 버튼을 통해
          <br />
          신청 부탁 드립니다:)
          <br />
          <span>&lt;예식 한 달전까지 요청 가능&gt;</span>
        </Text>
        <SubmitButton onClick={() => setIsOpenSubmit(true)}>
          신청하기
        </SubmitButton>
      </NoticeWrapper>
      {isOpenSubmit && (
        <SubmitModal
          setIsOpenSubmit={setIsOpenSubmit}
          setIsSubmitSucess={setIsSubmitSucess}
        />
      )}
      {submitIsSucess && (
        <Alert
          onClickCloseAlert={() => setIsSubmitSucess(false)}
          text={<p>신청이 정상 접수 되었습니다 :)</p>}
        />
      )}
    </>
  );
};

export default Notice;

const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  color: #f98d99;
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    font-size: 1.225rem;
    -webkit-text-stroke: 0.2px;
  }
  margin-bottom: 32px;
`;

const StyledSpan = styled.span`
  color: #f98d99;
  font-weight: 600;
`;

const Text = styled.p`
  text-align: center;
  color: #47494d;
  font-size: 1.075rem;
  line-height: 42px;
  -webkit-text-stroke: 0.2px;
  span {
    &:last-of-type {
      text-decoration: underline;
    }
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-family: "gowun dodum", sans-serif;
  color: #232426;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  width: 60%;
  height: 52px;
  background-color: #fff;
  border: 2px solid #eaeaea;
  cursor: pointer;
  -webkit-text-stroke: 0.2px;
  margin-top: 30px;
`;
