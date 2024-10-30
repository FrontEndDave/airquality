import React, { useEffect } from "react";
import { View } from "react-native";
import Svg, { G, Path } from "react-native-svg";
import Animated, { useSharedValue, withTiming, Easing } from "react-native-reanimated";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const AnimatedLogo = (props) => {
    const dashOffset = useSharedValue(1000);

    useEffect(() => {
        dashOffset.value = withTiming(0, {
            duration: 1000 * 30,
            easing: Easing.linear,
        });
    }, [dashOffset]);

    return (
        <Svg
            viewBox='0 0 24 24'
            width={72}
            height={72}
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            stroke='#fff'
            {...props}>
            <G
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'>
                <AnimatedPath
                    d='M3 8h7a3 3 0 10-3-3M4 16h11a3 3 0 11-3 3M2 12h17a3 3 0 10-3-3'
                    strokeDasharray='1000'
                    strokeDashoffset={dashOffset}
                    stroke='#fff'
                />
            </G>
        </Svg>
    );
};

export default AnimatedLogo;
