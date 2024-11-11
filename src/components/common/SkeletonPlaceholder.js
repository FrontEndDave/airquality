import React, { useState, useEffect } from "react";
import { Animated, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SkeletonLoader = ({ width = "100%", height = 20, borderRadius = 5, isLoading = true, duration = 800 }) => {
    const [containerWidth, setContainerWidth] = useState(0);
    const shimmerTranslate = new Animated.Value(0);

    const onLayout = (event) => {
        const { width } = event.nativeEvent.layout;
        setContainerWidth(width);
    };

    const startShimmer = () => {
        if (containerWidth > 0) {
            shimmerTranslate.setValue(-containerWidth);
            Animated.loop(
                Animated.sequence([
                    Animated.timing(shimmerTranslate, {
                        toValue: containerWidth,
                        duration: duration,
                        useNativeDriver: true,
                    }),
                    Animated.timing(shimmerTranslate, {
                        toValue: -containerWidth,
                        duration: 0,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        }
    };

    useEffect(() => {
        if (isLoading) {
            startShimmer();
        }
    }, [isLoading, containerWidth]);

    return (
        <View
            style={{
                width,
                height,
                position: "relative",
                overflow: "hidden",
                borderRadius,
            }}
            onLayout={onLayout}>
            {isLoading ? (
                <>
                    <Animated.View
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "200%",
                            height: "100%",
                            transform: [{ translateX: shimmerTranslate }],
                        }}>
                        <LinearGradient
                            colors={["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.3)"]}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius,
                            }}
                            start={{ x: -0.3, y: 0 }}
                            end={{ x: 1.3, y: 0 }}
                        />
                    </Animated.View>
                    <View
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#E8E8E8",
                            borderRadius,
                        }}
                    />
                </>
            ) : (
                <View
                    style={{
                        width,
                        height,
                        backgroundColor: "#E8E8E8",
                        borderRadius,
                    }}
                />
            )}
        </View>
    );
};

export default SkeletonLoader;
