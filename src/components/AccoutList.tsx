import styled from "styled-components";
import React, { useState } from "react";
import DownSVG from "../assets/icons/down-arrow.svg?react";

type AccountType = { name: string; bank: string; num: string };

interface AccountListProps {
  type: string;
  accounts: AccountType[];
  svg: React.ReactNode;
}

const AccountList = ({ type, accounts, svg }: AccountListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const copyClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("계좌번호가 복사되었습니다:)");
    } catch (e) {
      alert("복사에 실패하였습니다.");
    }
  };

  return (
    <ListContainer>
      <NavContainer $isOpen={isOpen}>
        {svg}
        <p>{type}측 계좌번호</p>
        <ToggleButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <DownSVG />
        </ToggleButton>
      </NavContainer>
      <Account $isOpen={isOpen}>
        {accounts?.map(({ name, bank, num }) => (
          <Info key={name}>
            <NameAndBank>
              <p>{name}</p>
              <p>
                {bank} {num}
              </p>
            </NameAndBank>
            <CopyButton onClick={() => copyClipboard(num)}>복사하기</CopyButton>
          </Info>
        ))}
      </Account>
    </ListContainer>
  );
};

export default AccountList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 75%;
`;

const Account = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  max-height: ${(props) => (props.$isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;

const NavContainer = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #262f3c;
  background: rgb(243, 243, 243);
  -webkit-text-stroke: 0.2px;
  padding: 21px;
  border-radius: ${(props) => (props.$isOpen ? "6px 6px 0 0" : "6px")};
  svg {
    width: 24px;
    height: 24px;
  }
`;

const ToggleButton = styled.button<{ $isOpen: boolean }>`
  border: none;
  padding: 0;

  background-color: transparent;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease-in-out;
    transform: ${(props) =>
      props.$isOpen ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-left: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-right: 1px solid #eee;
  color: #544f4f;
  font-size: 0.925rem;
  -webkit-text-stroke: 0.2px;
  line-height: 24px;
  font-family: "notosans", sans-serif;
`;

const NameAndBank = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const CopyButton = styled.button`
  color: #222;
  font-size: 0.925rem;
  -webkit-text-stroke: 0.5px;
  line-height: 24px;
  font-family: "notosans", sans-serif;
  height: 37px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  padding: 12px;
  display: flex;
  justify-content: center;
  font-weight: 500;
  align-items: center;
  background-color: (243, 243, 243);
`;
