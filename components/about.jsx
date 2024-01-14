import { Text, View } from "react-native";
import { marakazi } from "../constants/fonts";


export default function About() {
    return (
        <>
            <View className="flex justify-end items-end mt-4">
                <Text className="text-lg" style={marakazi.bold}>عن تطبيقنا</Text>
            </View>
            <View className="flex justify-end items-end my-4 mx-4">
                <Text className="text-right" style={marakazi.regular}>باستخدام تطبيقنا، يمكنك بسهولة تحويل النقاط أو العملات داخل لعبتك المفضلة، اواستلام مكافآتك مباشرة إلى حساب بايبال الخاص بك.</Text>
            </View>
        </>
    );
};