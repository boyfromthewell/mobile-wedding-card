import { useEffect, useRef } from "react";
import styled from "styled-components";

const StickySlider = () => {
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const START_VH = 250;
      const END_VH = 450;

      const viewportHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

      const startHeightInPx = (START_VH * viewportHeight) / 100;
      const endHeightInPx = (END_VH * viewportHeight) / 100;
      const element = cardContainerRef.current;

      if (element) {
        const currentScrollY =
          window.scrollY - element.getBoundingClientRect().y;

        const scrollRatio =
          (currentScrollY - startHeightInPx) /
          (endHeightInPx - startHeightInPx);

        element.style.transform = `translateX(-${scrollRatio * 80}%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Wrapper>
      <StickyContainer>
        <CardImageConatiner ref={cardContainerRef}>
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </CardImageConatiner>
      </StickyContainer>
    </Wrapper>
  );
};

export default StickySlider;

const Wrapper = styled.div`
  width: 100%;
  height: 450vh;
  position: relative;
`;

const StickyContainer = styled.div`
  width: 100%;
  height: 100dvh;
  position: sticky;
  display: flex;
  align-items: center;
  top: 0;
  overflow-x: hidden;
  background-color: blue;
`;

const CardImageConatiner = styled.div`
  display: flex;
  margin-left: 50%;
  width: max-content;
  gap: 120px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
`;
