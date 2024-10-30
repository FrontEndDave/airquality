import Svg, { G, Path } from "react-native-svg";

const Logo = (props) => {
    return (
        <Svg
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            stroke='#fff'
            {...props}>
            <G
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'>
                <Path
                    d='M3 8h7a3 3 0 10-3-3M4 16h11a3 3 0 11-3 3M2 12h17a3 3 0 10-3-3'
                    strokeDasharray='1000'
                    stroke='#fff'
                />
            </G>
        </Svg>
    );
};

export default Logo;
