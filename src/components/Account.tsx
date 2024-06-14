import styled from "styled-components";
import AccountList from "./AccoutList";
import { BRIDE_ACCOUNT, GROOM_ACCOUNT } from "../mock/account";
import GroomSVG from "../assets/icons/groom.svg?react";
import BrideSVG from "../assets/icons/bride.svg?react";
import { motion } from "framer-motion";

const Account = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        y: { duration: 1 },
      }}
    >
      <Wrapper>
        <Title>
          <p>
            마음 전하실 곳 <span style={{ fontSize: "0.825rem" }}>ACCOUNT</span>
          </p>
        </Title>
        <ListContainer>
          <AccountList
            type="신랑"
            accounts={GROOM_ACCOUNT}
            svg={<GroomSVG />}
          />
          <AccountList
            type="신부"
            accounts={BRIDE_ACCOUNT}
            svg={<BrideSVG />}
          />
        </ListContainer>
      </Wrapper>
    </motion.div>
  );
};

export default Account;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 130px;
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

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
