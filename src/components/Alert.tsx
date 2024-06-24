import styled from "styled-components";
import useDisableBodyScroll from "../hooks/useDisabledBodyScroll";

interface AlertProps {
  onClickCloseAlert: () => void;
  text: React.ReactNode;
}

const Alert = ({ onClickCloseAlert, text }: AlertProps) => {
  useDisableBodyScroll();

  return (
    <AlertBackground>
      <AlertContainer>
        {text}
        <CloseButton onClick={onClickCloseAlert}>닫기</CloseButton>
      </AlertContainer>
    </AlertBackground>
  );
};

export default Alert;

const AlertBackground = styled.div`
  width: 100%;
  height: 100dvh;
  position: fixed;
  max-width: 700px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const AlertContainer = styled.div`
  width: 70%;
  height: 15dvh;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 37px;
  padding: 24px;

  p {
    font-size: 1.075rem;
    text-align: center;
    line-height: 32px;
    -webkit-text-stroke: 0.4px;
  }
`;

const CloseButton = styled.button`
  font-family: "gowun dodum", sans-serif;
  cursor: pointer;
  width: 80%;
  font-size: 1.175rem;
  height: 40px;
  border-radius: 7px;
  border: none;
  background-color: #eee;
  border: 2px solid #eaeaea;
  -webkit-text-stroke: 0.4px;
`;
