import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PercentIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round" 
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 5 5 19M7.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM17.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
  </Svg>
)
export default PercentIcon