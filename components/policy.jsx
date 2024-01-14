import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export default function Policy() {
    const router = useRouter();

    return (
        <Text className="text-center mt-2 text-[12px]">
            <Text className="text-black/70 text-center">بتسجيل الدخول فانك توافق على</Text>
            {'\n'}
            <TouchableOpacity onPress={() => router.push("/terms")}>
                <Text className="underline text-primary">terms & conditions</Text>
            </TouchableOpacity>
            <Text className="text-black/70">{' و '}</Text>
            <TouchableOpacity onPress={() => router.push("/policy")}>
                <Text className="underline text-primary">privacy policy</Text>
            </TouchableOpacity>
        </Text>
    );
};