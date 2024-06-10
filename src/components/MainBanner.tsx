import styled from "styled-components";
import MainImage from "/banner.webp";
import { motion } from "framer-motion";

const MainBanner = () => {
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <Date>
          <p>2024 / 09 / 21</p>
          <span>SATURDAY</span>
        </Date>
        <img src={MainImage} alt="main-image" />
        <Detail>
          <Name>
            권순용 <span>·</span> 윤선영
          </Name>
          <Place>
            <p>2024년 9월 21일 토요일 오후 5시</p>
            <p>노블발렌티 삼성점</p>
          </Place>
        </Detail>
      </motion.div>
    </Wrapper>
  );
};

export default MainBanner;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  img {
    width: 100%;
  }
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 37px 0 37px 0;
  gap: 20px;
  color: #49413a;
  font-family: "Crimson";
  p {
    line-height: 20px;
    font-size: 1.752rem;
  }
  span {
    font-size: 1.05rem;
  }
`;

const Detail = styled.div`
  display: flex;
  padding-top: 37px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 27px;
`;

const Name = styled.div`
  display: flex;
  font-size: 1.625rem;
  line-height: 20px;
  -webkit-text-stroke: 0.2px;
  span {
    margin: 0 12px 0 12px;
  }
`;

const Place = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  color: #232426;
  -webkit-text-stroke: 0.2px;
  p {
    font-size: 1.125rem;
    color: #47494d;
  }
`;
