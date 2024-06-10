import styled from "styled-components";
import { motion } from "framer-motion";

const SubBanner = () => {
  return (
    <Wrapper>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        소중한 분들을 초대합니다
        <span style={{ fontSize: "1.025rem" }}>INVITATION</span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <p>
          언제나 품에 안길 것 같기만 하던
          <br />
          소중한 두 사람이
          <br />
          믿음직하게 성장해
          <br />
          평생을 함께 할 짝을
          <br />
          만나게 되었습니다.
          <br />
          <br />
          소중한 자리
          <br />
          함께 축복해주시면
          <br />
          더없는 기쁨으로 간직하겠습니다.
        </p>
      </motion.p>
    </Wrapper>
  );
};

export default SubBanner;

const Wrapper = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  align-items: center;

  p {
    display: flex;
    flex-direction: column;

    text-align: center;
    -webkit-text-stroke: 0.2px;
    &:first-child {
      font-size: 1.425rem;
      color: #f98d99;
      line-height: 2;
      margin-bottom: 27px;
    }
    &:last-child {
      font-size: 1.025rem;
      line-height: 42px;
      color: #47494d;
      font-weight: 500;
    }
  }
`;
