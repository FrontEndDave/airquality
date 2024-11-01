import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AddIcon(props) {
    return (
        <Svg
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}>
            <Path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.25 12.75V18h1.5v-5.25H18v-1.5h-5.25V6h-1.5v5.25H6v1.5h5.25z'
                fill='#080341'
            />
        </Svg>
    );
}

export default AddIcon;
