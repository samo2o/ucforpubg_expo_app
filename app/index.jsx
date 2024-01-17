import { Stack, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';

import { marakazi } from "../constants/fonts";
import { freefire_logo, hero_1, paypal_logo, pubg_logo, rules_icon, shield_icon, ucLogo, youtube_agree_screenshot, youtube_icon } from "../constants/images";
import { colors } from "../constants/colors";
import Rules from "../components/rules";
import About from "../components/about";
import Policy from "../components/policy";
import Hero from "../components/hero";

export default function Home() {
    const navigation = useNavigation();
    
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    return (
        <SafeAreaView className="bg-white">
            <Stack.Screen />

            <ScrollView>
                <View className="flex justify-center items-center">
                    <Image source={ucLogo} className="h-44 w-44 my-16" />
                    <Hero />
                </View>

                <LinearGradient colors={[colors.white, colors.secondary ]} className="px-4 py-6 mt-12">
                    <View className="gap-4">
                        <View className="flex flex-row space-x-2 justify-end">
                            <Image source={pubg_logo} className="w-16 h-16 rounded-lg"/>
                            <Image source={freefire_logo} className="w-16 h-16 rounded-lg"/>
                            <Image source={paypal_logo} className="w-16 h-16 rounded-lg"/>
                        </View>
                        <About />
                    </View>
                </LinearGradient>

                <LinearGradient locations={[ 0.5, 0.9]} colors={[colors.secondary, colors.white ]} className="px-4 pb-6 pt-8">
                    <View className="gap-4">
                        <View className="flex justify-center items-center">
                            <Image source={rules_icon} className="w-16 h-16"/>
                        </View>
                        <View className="flex justify-end items-end">
                            <Text className="text-lg" style={marakazi.bold}>قواعد الاستخدام</Text>
                        </View>
                        <View className="flex justify-end items-end">
                            <View>
                                <Rules />
                            </View>
                        </View>
                    </View>
                </LinearGradient>
                
                <View className="px-4 pb-6 pt-8">
                    <View className="gap-4">
                        <View className="flex justify-center items-center">
                            <Image source={youtube_icon} className="w-16 h-16"/>
                        </View>
                        <View className="flex justify-end items-end">
                            <Text className="text-lg" style={marakazi.bold}>طريقة التسجيل الدخول</Text>
                        </View>
                        <View className="flex justify-center items-center">
                            <Image source={youtube_agree_screenshot} className="w-screen max-w-[320px] h-[520px]" resizeMode="contain"/>
                        </View>
                    </View>
                </View>

                <View className="px-4 pb-6 pt-8">
                    <View className="flex flex-row justify-center items-center">
                        <Image source={shield_icon} className="w-16 h-16"/>
                        <Text className="text-xl w-48 text-center" style={marakazi.bold}>تطبيقنا امن وموثق</Text>
                    </View>
                </View>

                <View className="px-4 pb-4 pt-8 flex justify-center items-center">
                    <TouchableOpacity onPress={() => Linking.openURL("https://ucforpubg.com/login")} className="bg-primary w-64 py-2 px-4 rounded-3xl items-center">
                        <Text className="text-lg text-white">ابدا الان</Text>
                    </TouchableOpacity>
                    <Policy />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};