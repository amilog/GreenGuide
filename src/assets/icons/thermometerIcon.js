import * as React from "react";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";
const ThermometerIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Rect
      width={7}
      height={30}
      x={7.501}
      y={38.997}
      fill="url(#a)"
      rx={3.5}
      transform="rotate(179.263 7.501 38.997)"
    />
    <Rect
      width={6}
      height={38}
      x={6.995}
      y={38.503}
      stroke="#000"
      strokeOpacity={0.4}
      rx={3}
      transform="rotate(179.263 6.995 38.503)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={11.001}
        x2={11.001}
        y1={38.997}
        y2={77.997}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B73C3C" />
        <Stop offset={0.458} stopColor="#D04242" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ThermometerIcon;
