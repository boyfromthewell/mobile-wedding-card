import styled from "styled-components";
import { useState } from "react";
import React from "react";
import { IMAGE_RESIZE } from "../mock/image_resize";
import { motion } from "framer-motion";

interface GridImageProps {
  onClickImage: (idx: number) => void;
}

const GridImage = ({ onClickImage }: GridImageProps) => {
  const [showMore, setShowMore] = useState(false);

  const onClickShowMore = () => setShowMore(true);

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
        {IMAGE_RESIZE.slice(0, showMore ? IMAGE_RESIZE.length : 28).map(
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
      {!showMore && <ShowMoreBtn onClick={onClickShowMore}>더보기</ShowMoreBtn>}
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
    "yy zz aa"
    "bb cc dd"
    "ee gg hh"
    "ff gg hh"
    "ii jj ll"
    "mm oo pp"
    "qq kk ss"
    "qq fff ss"
    "tt uu vv"
    "ww xxx yyy"
    "zzz aaa bbb"
    "ccc ddd eee"
    "iii ggg kkk"
    "iii hhh kkk"
    "jjj lll mmm"
    "nnn ooo ppp";

  img {
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
  .image26 {
    grid-area: zz;
  }
  .image27 {
    grid-area: aa;
  }
  .image28 {
    grid-area: bb;
  }
  .image29 {
    grid-area: cc;
  }
  .image30 {
    grid-area: dd;
  }
  .image31 {
    grid-area: ee;
  }
  .image32 {
    grid-area: ff;
  }

  .image33 {
    grid-area: gg;
  }
  .image34 {
    grid-area: hh;
  }
  .image35 {
    grid-area: ii;
  }
  .image36 {
    grid-area: jj;
  }
  .image37 {
    grid-area: kk;
  }
  .image38 {
    grid-area: ll;
  }
  .image39 {
    grid-area: mm;
  }
  .image40 {
    grid-area: oo;
  }
  .image41 {
    grid-area: pp;
  }
  .image42 {
    grid-area: qq;
  }

  .image44 {
    grid-area: ss;
  }
  .image45 {
    grid-area: tt;
  }
  .image46 {
    grid-area: uu;
  }
  .image47 {
    grid-area: vv;
  }
  .image48 {
    grid-area: ww;
  }
  .image49 {
    grid-area: xxx;
  }
  .image50 {
    grid-area: yyy;
  }
  .image51 {
    grid-area: zzz;
  }
  .image52 {
    grid-area: aaa;
  }
  .image53 {
    grid-area: bbb;
  }
  .image54 {
    grid-area: ccc;
  }
  .image55 {
    grid-area: ddd;
  }
  .image56 {
    grid-area: eee;
  }
  .image57 {
    grid-area: fff;
  }
  .image58 {
    grid-area: ggg;
  }
  .image59 {
    grid-area: hhh;
  }
  .image60 {
    grid-area: iii;
  }
  .image61 {
    grid-area: jjj;
  }
  .image62 {
    grid-area: kkk;
  }
  .image63 {
    grid-area: lll;
  }
  .image64 {
    grid-area: mmm;
  }
  .image65 {
    grid-area: nnn;
  }
  .image66 {
    grid-area: ooo;
  }
  .image67 {
    grid-area: ppp;
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
