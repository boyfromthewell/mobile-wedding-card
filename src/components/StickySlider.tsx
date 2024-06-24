import { useEffect, useRef } from "react";
import styled from "styled-components";
import Image1 from "/temp1.jpg";
import Image2 from "/temp2.jpg";
import Image3 from "/temp3.jpg";

const StickySlider = () => {
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
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
          if (currentScrollY > 5000) return;

          const scrollRatio =
            (currentScrollY - startHeightInPx) /
            (endHeightInPx - startHeightInPx);

          element.style.transform = `translateX(-${scrollRatio * 80}%)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <StickyContainer>
        <Title>
          <p>우리의 이야기</p>
        </Title>
        <CardImageConatiner ref={cardContainerRef}>
          <ImageContainer>
            <ImageX src={Image1} alt="image1" />
            <Border>
              <Text>저는 누워있는걸 잘하는 꼼도리에요</Text>
            </Border>
          </ImageContainer>
          <ImageContainer>
            <Image src={Image2} alt="image1" />
            <Border>
              <Text>그치만 요리도 잘해요</Text>
            </Border>
          </ImageContainer>
          <ImageContainer>
            <Image src={Image3} alt="image1" />
            <Border>
              <Text>
                데이식스를 좋아하지만
                <br />
                땀똠이도 사랑해요
              </Text>
            </Border>
          </ImageContainer>
        </CardImageConatiner>
      </StickyContainer>
    </Wrapper>
  );
};

export default StickySlider;

const Wrapper = styled.div`
  width: 100%;
  height: 450vh;
  margin-top: 210px;
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
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CardImageConatiner = styled.div`
  position: absolute;
  left: 33%;
  display: flex;
  width: max-content;
  transition: transform 0.2s ease-in-out;
`;

const Image = styled.img`
  width: 300px;
  height: 450px;
  overflow: hidden;
  border-radius: 100px;
`;

const ImageX = styled.img`
  width: 400px;
  height: 300px;
  overflow: hidden;
  border-radius: 100px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  height: auto;
`;

const Border = styled.div`
  position: relative;
  width: 340px;
  height: 2px;
  background-color: lightgray;
`;

const Text = styled.p`
  position: absolute;
  font-size: 1.025rem;
  line-height: 42px;
  color: #47494d;
  font-weight: 500;
  top: 0;
  left: 10%;
  -webkit-text-stroke: 0.2px;
`;
