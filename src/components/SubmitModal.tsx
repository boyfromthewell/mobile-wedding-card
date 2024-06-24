import { FormEvent, useState } from "react";
import styled from "styled-components";
import { submitMenu } from "../firebase/submitMenu";
import CloseSVG from "../assets/icons/close.svg?react";

interface SubmitModalProps {
  setIsOpenSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSubmitSucess: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubmitModal = ({
  setIsOpenSubmit,
  setIsSubmitSucess,
}: SubmitModalProps) => {
  const [formData, setFormData] = useState({ name: "", menu: "" });
  const [error, setError] = useState({ isError: false, type: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    setError({ isError: false, type: "" });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkInputNotEmpty()) {
      const isSubmit = await submitMenu(formData);
      if (isSubmit) {
        setIsOpenSubmit(false);
        setIsSubmitSucess(true);
      }
    }
  };

  const checkInputNotEmpty = () => {
    if (!formData.name) {
      setError({ isError: true, type: "name" });
      return false;
    }
    if (!formData.menu) {
      setError({ isError: true, type: "menu" });
      return false;
    }
    return true;
  };

  return (
    <Background>
      <CloseSVG onClick={() => setIsOpenSubmit(false)} />
      <ModalContainer>
        <form onSubmit={handleSubmit}>
          <FormRow>
            <label htmlFor="name" style={{ fontWeight: 600 }}>
              성함
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            <Error $isError={error.isError && error.type === "name"}>
              이름을 입력해주세요.
            </Error>
          </FormRow>
          <Divider />
          <FormRow>
            <label style={{ fontWeight: 600 }}>메뉴 변경</label>
            <RadioContainer>
              <label>
                <input
                  type="radio"
                  id="menu"
                  name="menu"
                  value="도미"
                  checked={formData.menu === "도미"}
                  onChange={handleChange}
                />
                도미
              </label>
              <label>
                <input
                  type="radio"
                  id="menu"
                  name="menu"
                  value="떡갈비"
                  checked={formData.menu === "떡갈비"}
                  onChange={handleChange}
                />
                떡갈비
              </label>
            </RadioContainer>
            <Error $isError={error.isError && error.type === "menu"}>
              메뉴를 선택해주세요.
            </Error>
          </FormRow>
          <SubmitButton>신청하기</SubmitButton>
        </form>
      </ModalContainer>
    </Background>
  );
};

export default SubmitModal;

const Background = styled.div`
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

  svg {
    position: absolute;
    cursor: pointer;
    top: 32px;
    right: 17px;
    width: 52px;
    height: 52px;
    path {
      fill: #fff;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  background-color: #eee;
  height: 1px;
  margin: 12px 0 24px 0;
`;

const ModalContainer = styled.div`
  width: 80%;
  height: 30dvh;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 17px 27px;
`;

const FormRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  label {
    color: #47494d;
    -webkit-text-stroke: 0.2px;
    font-size: 1.25rem;
  }

  input[type="text"] {
    font-family: "gowun dodum", sans-serif;
    height: 27px;
    font-size: 1rem;
    color: #000;
    border-radius: 8px;
    border: none;
    outline: 1px solid rgb(204, 204, 204);
    padding: 6px;
    &:focus {
      outline: 2px solid #ffb3de;
    }
  }
`;

const RadioContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  input[type="radio"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    margin: 0;
    margin-right: 7px;
  }

  input[type="radio"]:checked {
    background-color: #ffb3de;
    border: 3px solid white;
    box-shadow: 0 0 0 1.6px #ffb3de;
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
  width: 80%;
  height: 52px;
  background-color: #fff;
  border: 2px solid #eaeaea;
  cursor: pointer;
  -webkit-text-stroke: 0.2px;
  margin-top: 12px;
`;

const Error = styled.span<{ $isError: boolean }>`
  color: #47494d;
  font-size: 0.845rem;
  width: fit-content;
  height: max-content;
  margin: 0;
  font-weight: 600;
  visibility: ${(props) => (props.$isError ? "visible" : "hidden")};
`;
