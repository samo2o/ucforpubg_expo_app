import { Animated, Image, Text, View } from "react-native";
import { marakazi } from "../constants/fonts";
import { useEffect, useState } from "react";

import { heros, herosText } from "../constants/heros";

export default function Hero() {
    const [ heroIndex, setHeroIndex ] = useState(0);
    const fadeAnimation = new Animated.Value(0);

    useEffect(() => {
        const fadeIn = Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: false,
        });

        const fadeOut = Animated.timing(fadeAnimation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        });

        const cycleAnimation = () => {
            fadeIn.start(() => {
                // console.log('Fading in...');
                setTimeout(() => {
                    fadeOut.start(() => {
                        // console.log('Fading out...');
                        setHeroIndex((prevIndex) => (prevIndex !== 2 ? prevIndex + 1 : 0));
                    });
                }, 8000);
            });
        };

        // console.log('Animation called...');
        cycleAnimation();
    }, [heroIndex]);

    return (
        <Animated.View
            style={{
                opacity: fadeAnimation,
            }}
        >
            <View className="my-4 gap-2">
                <Image source={heros[heroIndex]} className="h-32 w-32" />
                <Text className="text-center text-lg py-4" style={marakazi.bold} >{herosText[heroIndex]}</Text>
            </View>
        </Animated.View>
    );
};