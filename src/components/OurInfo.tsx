import styled from "styled-components";
import OurImage from "/info.webp";
import { motion } from "framer-motion";

const OurInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        y: { duration: 1 },
      }}
    >
      <Wrapper>
        <Image src={OurImage} alt="info-image" />
        <Info>
          <p>
            <span>권기석</span>·<span>홍정수</span>의 장남 <span>권순용</span>
          </p>
          <p>
            <span>윤흥섭</span>·<span>방명숙</span>의 차녀 <span>윤선영</span>
          </p>
        </Info>
      </Wrapper>
    </motion.div>
  );
};

export default OurInfo;

const Wrapper = styled.div`
  margin-top: 190px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  padding: 0px 37px 0 37px;
`;

const Image = styled.img`
  border-radius: 8px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 17px;
  -webkit-text-stroke: 0.2px;
  p {
    color: #8d9299;
  }
  span {
    color: #232426;
  }
`;
