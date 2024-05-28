import styled from "styled-components";
import { useRef, useState } from "react";
import React from "react";
import { IMAGE } from "../mock/image";

interface GridImageProps {
  onClickImage: (idx: number) => void;
}

const GridImage = ({ onClickImage }: GridImageProps) => {
  const [showMore, setShowMore] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const onClickShowMore = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollIntoView({
        behavior: "smooth",
      });
      setShowMore(true);
    }
  };

  return (
    <div ref={wrapperRef}>
      <Wrapper>
        {IMAGE.slice(0, showMore ? IMAGE.length : 6).map(
          ({ src, alt }, idx) => (
            <React.Fragment key={idx}>
              <img src={src} alt={alt} onClick={() => onClickImage(idx)} />
            </React.Fragment>
          )
        )}
      </Wrapper>
      {!showMore && <button onClick={onClickShowMore}>더보기</button>}
    </div>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  width: fit-content;
  height: 100%;
  display: grid;
  align-items: center;
  gap: 12px;
  grid-template-columns: repeat(3, 1fr);

  img {
    width: 100%;
    cursor: pointer;
    object-fit: contain;
  }
`;

export default GridImage;
