import * as React from "react";
import Svg, { Path } from "react-native-svg";

function InfoIcon(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}>
            <Path
                d='M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zM12 8v5'
                stroke='#0C0507'
                strokeWidth={1.5}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M11.995 16h.009'
                stroke='#0C0507'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export default InfoIcon;
