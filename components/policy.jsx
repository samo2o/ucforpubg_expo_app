import { Linking, Text, TouchableOpacity } from "react-native";

export default function Policy() {
    return (
        <Text className="text-center mt-2 text-[12px]">
            <Text className="text-black/70 text-center text-[12px]">بتسجيل الدخول فانك توافق على</Text>
            {'\n'}
            <TouchableOpacity onPress={() => Linking.openURL("https://ucforpubg.com/terms-and-conditions/")}>
                <Text className="underline text-primary text-[12px]">terms & conditions</Text>
            </TouchableOpacity>
            <Text className="text-black/70">{' و '}</Text>
            <TouchableOpacity onPress={() => Linking.openURL("https://ucforpubg.com/privacy-policy-2/")}>
                <Text className="underline text-primary text-[12px]">privacy policy</Text>
            </TouchableOpacity>
        </Text>
    );
};