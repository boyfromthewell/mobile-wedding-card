import { useState } from "react";
import styled from "styled-components";
import { addGuestBook } from "../firebase/addGuestBook";
import Alert from "./Alert";
import { motion } from "framer-motion";

const GuestBook = () => {
  const [isSucessGuestBook, setIsSucessGuestBook] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ isError: false, type: "" });

  const [guestBook, setGuestBook] = useState({ name: "", text: "", date: "" });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setGuestBook((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    setError({ isError: false, type: "" });
  };

  const resetGuestBook = () => {
    setGuestBook({ name: "", text: "", date: "" });
  };

  const onClickSendGuestBook = async () => {
    if (checkInputNotEmpty()) {
      setIsLoading(true);
      const isSuccess = await addGuestBook(guestBook);
      if (isSuccess) {
        setIsLoading(false);
        setIsSucessGuestBook(true);
        resetGuestBook();
      }
    }
  };

  const checkInputNotEmpty = () => {
    if (!guestBook.name) {
      setError({ isError: true, type: "name" });
      return false;
    }
    if (!guestBook.text) {
      setError({ isError: true, type: "text" });
      return false;
    }
    return true;
  };

  const onClickCloseAlert = () => {
    setIsSucessGuestBook(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <Title>
          <p>
            방명록 <span style={{ fontSize: "0.825rem" }}>GUESTBOOK</span>
          </p>
          <p>작성 해주시면 순용, 선영에게 전달되요:)</p>
        </Title>
      </motion.div>

      <FormContainer>
        <InputContainer>
          <label>이름</label>
          <SubContainer>
            <input
              id="name"
              onChange={onChange}
              value={guestBook.name}
              placeholder="이름을 작성해주세요."
            />

            <Error $isError={error.isError && error.type === "name"}>
              이름을 입력해주세요.
            </Error>
          </SubContainer>
        </InputContainer>
        <InputContainer>
          <label>내용</label>
          <SubContainer>
            <textarea
              id="text"
              onChange={onChange}
              value={guestBook.text}
              placeholder="내용을 작성해주세요. (최대 100자)"
              maxLength={100}
            />
            <Error $isError={error.isError && error.type === "text"}>
              내용을 입력해주세요.
            </Error>
          </SubContainer>
        </InputContainer>
      </FormContainer>

      {!isLoading ? (
        <SendButton onClick={onClickSendGuestBook}>보내기</SendButton>
      ) : (
        <ProgressBar />
      )}
      {isSucessGuestBook && <Alert onClickCloseAlert={onClickCloseAlert} />}
    </>
  );
};

export default GuestBook;

const Title = styled.div`
  margin-top: 130px;
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    font-size: 1.225rem;
    color: #f98d99;
    -webkit-text-stroke: 0.2px;
    &:last-of-type {
      margin-top: 20px;
      font-size: 0.925rem;
      color: #47494d;
    }
  }
`;

const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12px;
  border-radius: 8px;
  background-color: #ececec;
  position: fixed;
  bottom: 0;
  overflow: hidden;
  z-index: 500;

  &::before {
    content: "";
    position: absolute;
    width: 70%;
    height: 12px;
    border-radius: 8px;
    background-color: #f8c8c4;
    animation: loading 1.5s infinite ease-in-out;
  }

  @keyframes loading {
    0% {
      left: -50%;
    }
    50% {
      left: 100%;
    }
    100% {
      left: 100%;
    }
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 8px;
  margin-top: 42px;
`;

const InputContainer = styled.div`
  display: flex;

  width: 70%;
  gap: 12px;
  -webkit-text-stroke: 0.2px;

  label {
    margin-top: 12px;
    width: 15%;
    font-size: 0.925rem;
    color: #47494d;
  }

  input,
  textarea {
    font-family: "gowun dodum", sans-serif;
    height: 27px;
    font-size: 1rem;
    color: #000;
    border-radius: 8px;
    border: none;
    outline: 1px solid rgb(204, 204, 204);
    padding: 6px;
    &:focus {
      outline: 1px solid #f98d99;
    }
  }

  textarea {
    height: 120px;
    resize: none;
  }
`;

const SubContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  input,
  textarea {
    width: 90%;
    margin-bottom: 6px;
  }
`;

const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-family: "gowun dodum", sans-serif;
  color: #232426;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  width: 60%;
  height: 52px;
  background-color: #fff;
  border: 2px solid #eaeaea;
  cursor: pointer;
  -webkit-text-stroke: 0.2px;
  margin-top: 30px;
`;

const Error = styled.span<{ $isError: boolean }>`
  color: #f55320;
  font-size: 0.845rem;
  width: fit-content;
  height: max-content;
  margin: 0;
  visibility: ${(props) => (props.$isError ? "visible" : "hidden")};
`;
