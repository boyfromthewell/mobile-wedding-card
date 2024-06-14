import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";
import styled from "styled-components";
import { motion } from "framer-motion";
import LocationButton from "./LocationButton";

const Map = () => {
  const navermaps = useNavermaps();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        y: { duration: 1 },
      }}
    >
      <MapContainer>
        <Title>
          <p>오시는 길</p>
          <span>LOCATION</span>
        </Title>
        <Location>
          <p>노블발렌티 삼성점 단독홀</p>
          <p>서울특별시 강남구 봉은사로 637</p>
          <span>TEL 02-540-0711</span>
        </Location>
        <MapDiv style={{ width: "100%", height: 250 }}>
          <NaverMap
            zoomControl
            zoomControlOptions={{
              position: navermaps.Position.TOP_RIGHT,
              style: navermaps.ZoomControlStyle.SMALL,
            }}
            defaultCenter={new navermaps.LatLng(37.515319, 127.06483)}
            defaultZoom={17}
            draggable={false}
            scrollWheel={false}
            pinchZoom={false}
            keyboardShortcuts={false}
            disableDoubleClickZoom
            disableDoubleTapZoom
            disableTwoFingerTapZoom
          >
            <Marker position={new navermaps.LatLng(37.515319, 127.06483)} />
          </NaverMap>
        </MapDiv>
        <LocationButton />
      </MapContainer>
    </motion.div>
  );
};

export default Map;

const MapContainer = styled.div`
  width: 100%;
  height: max-content;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  color: #f98d99;
  margin-bottom: 18px;
  P {
    font-size: 1.225rem;

    -webkit-text-stroke: 0.2px;
  }
  span {
    font-size: 0.825rem;
  }
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-text-stroke: 0.2px;
  line-height: 24px;
  p {
    &:first-child {
      color: #232426;
      font-size: 1.425rem;
    }
    &:last-of-type {
      color: #47494d;
      font-size: 1.025rem;
      margin-top: 12px;
    }
  }
  span {
    color: #47494d;
    font-size: 1.075rem;
    margin-top: 22px;
  }
  margin-bottom: 25px;
`;
