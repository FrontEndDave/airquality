import * as React from "react";
import Svg, { Path } from "react-native-svg";

function UnitsIcon(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}>
            <Path
                d='M22 6.5h-6M6 6.5H2M10 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM22 17.5h-4M8 17.5H2M14 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7z'
                stroke='#0C0507'
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export default UnitsIcon;
