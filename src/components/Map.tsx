import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";

const Map = () => {
  const navermaps = useNavermaps();

  return (
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
        keyboardShortcuts={false}
        disableDoubleClickZoom
        disableDoubleTapZoom
        disableTwoFingerTapZoom
      >
        <Marker position={new navermaps.LatLng(37.515319, 127.06483)} />
      </NaverMap>
    </MapDiv>
  );
};

export default Map;
