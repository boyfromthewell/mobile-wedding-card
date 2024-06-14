import styled from "styled-components";
import BomttomImage from "/bottom.webp";

const BottomBanner = () => {
  return (
    <Wrapper>
      <Overlay />
      <img src={BomttomImage} alt="bottom-image" />
      <Madeby>Made by Kwon Soon Yong</Madeby>
    </Wrapper>
  );
};

export default BottomBanner;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: max-content;
  img {
    width: 100%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  pointer-events: none;
`;

const Madeby = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  font-size: 13px;
  color: #ccc;
`;
