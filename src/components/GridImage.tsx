import styled from "styled-components";
import React from "react";
import { IMAGE_RESIZE } from "../mock/image_resize";
import { motion } from "framer-motion";

interface GridImageProps {
  onClickImage: (idx: number) => void;
  onClickShowMore: () => void;
  isShowMore: boolean;
}

const GridImage = ({
  onClickImage,
  onClickShowMore,
  isShowMore,
}: GridImageProps) => {
  console.log(IMAGE_RESIZE.length);
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          y: { duration: 1 },
        }}
      >
        <p>
          우리의 순간 <span style={{ fontSize: "0.825rem" }}>GALLARY</span>
        </p>
      </motion.div>
      <ImageWrapper>
        {IMAGE_RESIZE.slice(0, isShowMore ? IMAGE_RESIZE.length : 33).map(
          ({ src, alt }, idx) => (
            <React.Fragment key={idx}>
              <img
                loading="lazy"
                width={"100%"}
                className={`image${idx + 1}`}
                src={src}
                alt={alt}
                onClick={() => onClickImage(idx)}
              />
            </React.Fragment>
          )
        )}
      </ImageWrapper>
      {!isShowMore && (
        <ShowMoreBtn onClick={onClickShowMore}>더보기</ShowMoreBtn>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 130px;
  margin-bottom: 130px;
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    font-size: 1.225rem;
    color: #f98d99;
    -webkit-text-stroke: 0.2px;
  }
`;

const ImageWrapper = styled.div`
  padding: 20px 20px 0 20px;
  margin-bottom: 32px;
  width: fit-content;
  height: 100%;
  display: grid;
  align-items: center;
  gap: 12px;
  grid-auto-flow: dense;
  grid-template-columns: repeat(3, 1fr);

  .image23,
  .image24,
  .image29,
  .image45,
  .image46,
  .image47,
  .image65 {
    grid-column: auto / span 2;
  }

  img {
    cursor: pointer;
  }
`;

const ShowMoreBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-family: "gowun dodum", sans-serif;
  color: #232426;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  width: 50%;
  height: 52px;
  background-color: #fff;
  border: 2px solid #eaeaea;
  cursor: pointer;
  -webkit-text-stroke: 0.2px;
`;

export default GridImage;
