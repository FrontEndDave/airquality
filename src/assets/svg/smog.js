import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Smog(props) {
    return (
        <Svg
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
            fill={props.color || "#000"}
            className='bi bi-cloud-haze'
            stroke={props.color || "#000"}
            strokeWidth={0.00016}
            {...props}>
            <Path d='M8.5 3a4.002 4.002 0 00-3.8 2.745.5.5 0 11-.949-.313 5.002 5.002 0 019.654.595A3 3 0 0113 12H4.5a.5.5 0 010-1H13a2 2 0 00.001-4h-.026a.5.5 0 01-.5-.445A4 4 0 008.5 3zM0 7.5A.5.5 0 01.5 7h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm2 2a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm-2 4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z' />
        </Svg>
    );
}

export default Smog;
