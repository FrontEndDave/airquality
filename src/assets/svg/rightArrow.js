import * as React from "react";
import Svg, { Path } from "react-native-svg";

function RightArrowIcon(props) {
    return (
        <Svg
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}>
            <Path
                d='M10 7l5 5-5 5'
                stroke='#000'
                strokeWidth={1.5}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export default RightArrowIcon;
