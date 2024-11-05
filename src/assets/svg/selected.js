import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SelectedIcon(props) {
    return (
        <Svg
            viewBox='0 0 1024 1024'
            className='icon'
            stroke='#000'
            strokeWidth={20}
            xmlns='http://www.w3.org/2000/svg'
            {...props}>
            <Path d='M439.2 680c9.6 8.8 25.6 8.8 35.2-.8l300-309.6c9.6-9.6 9.6-25.6-.8-35.2-9.6-9.6-25.6-9.6-35.2.8l-300 309.6 35.2-.8-182.4-167.2c-10.4-9.6-25.6-8.8-35.2 1.6-9.6 10.4-8.8 25.6 1.6 35.2L439.2 680z' />
            <Path d='M515.2 1007.2c-276 0-500-224-500-500s224-500 500-500 500 224 500 500-224 500-500 500zm0-952c-249.6 0-452 202.4-452 452s202.4 452 452 452 452-202.4 452-452-202.4-452-452-452z' />
        </Svg>
    );
}

export default SelectedIcon;
