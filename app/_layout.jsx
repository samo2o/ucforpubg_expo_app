import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
    const [fontsLoaded] = useFonts({
        MarakaziRegular: require('../assets/fonts/Lato-Regular.ttf'),
        MarakaziBold: require('../assets/fonts/Lato-Bold.ttf'),
    });

    useEffect(() => {
        const hideSplashscreen = async () => {
            await SplashScreen.hideAsync();
        }
        hideSplashscreen();
    }, []);

    if(!fontsLoaded) {
        return null;
    }

    return <Stack />;
};