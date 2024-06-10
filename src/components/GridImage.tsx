import styled from "styled-components";
import { useRef, useState } from "react";
import React from "react";
import { IMAGE } from "../mock/image";
import { motion } from "framer-motion";

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
    <Container>
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
        우리의 순간
        <span style={{ fontSize: "1.025rem" }}>GALLARY</span>
      </motion.p>
      <ImageWrapper ref={wrapperRef}>
        {IMAGE.slice(0, showMore ? IMAGE.length : 15).map(
          ({ src, alt }, idx) => (
            <React.Fragment key={idx}>
              <img
                className={`image${idx + 1}`}
                src={src}
                alt={alt}
                onClick={() => onClickImage(idx)}
              />
            </React.Fragment>
          )
        )}
      </ImageWrapper>
      {!showMore && <ShowMoreBtn onClick={onClickShowMore}>더보기</ShowMoreBtn>}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 130px;
  p {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 1.425rem;
    color: #f98d99;
    line-height: 2;
    margin-bottom: 27px;
    -webkit-text-stroke: 0.2px;
  }
`;

const ImageWrapper = styled.div`
  padding: 20px 20px 0 20px;
  width: fit-content;
  height: 100%;
  display: grid;
  align-items: center;
  gap: 12px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "a b c"
    "d e f"
    "g h i"
    "j k l"
    "m n o"
    "p q rr"
    "s t u"
    "v w xx"
    "v w yy";

  img {
    width: 100%;
    cursor: pointer;
  }

  .image1 {
    grid-area: a;
  }
  .image2 {
    grid-area: b;
  }
  .image3 {
    grid-area: c;
  }
  .image4 {
    grid-area: d;
  }
  .image5 {
    grid-area: e;
  }
  .image6 {
    grid-area: f;
  }
  .image7 {
    grid-area: g;
  }
  .image8 {
    grid-area: h;
  }
  .image9 {
    grid-area: i;
  }
  .image10 {
    grid-area: j;
  }
  .image11 {
    grid-area: k;
  }
  .image12 {
    grid-area: l;
  }
  .image13 {
    grid-area: m;
  }
  .image14 {
    grid-area: n;
  }
  .image15 {
    grid-area: o;
  }
  .image16 {
    grid-area: p;
  }
  .image17 {
    grid-area: q;
  }
  .image18 {
    grid-area: rr;
  }
  .image19 {
    grid-area: s;
  }
  .image20 {
    grid-area: t;
  }
  .image21 {
    grid-area: u;
  }
  .image22 {
    grid-area: v;
  }
  .image23 {
    grid-area: w;
  }
  .image24 {
    grid-area: xx;
  }
  .image25 {
    grid-area: yy;
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
  width: 220px;
  height: 52px;
  background-color: #fff;
  border: 2px solid #eaeaea;
  cursor: pointer;
  -webkit-text-stroke: 0.2px;
`;

export default GridImage;
