import * as React from "react";
import Svg, { Path } from "react-native-svg";

function RemoveIcon(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}>
            <Path
                d='M22 2L2 22M20.68 8.71v11c0 2.01-1.44 2.86-3.2 1.88L11 17.54M3.32 19.95V5.86C3.32 3.74 5.05 2 7.18 2h9.65c1.21 0 2.29.56 3 1.44'
                stroke='#0C0507'
                strokeWidth={1.5}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export default RemoveIcon;
