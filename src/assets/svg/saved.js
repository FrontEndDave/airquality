import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SavedIcon(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}>
            <Path
                d='M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86C20.68 3.74 18.95 2 16.82 2z'
                stroke={props.color || "#000"}
                strokeWidth={1.5}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M9.59 11l1.5 1.5 4-4'
                stroke={props.color || "#000"}
                strokeWidth={1.5}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export default SavedIcon;
