import { useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { useNavigation } from "expo-router";

export default function Policy() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: "Privacy Policy" });
    }, [navigation]);

    return (
        <ScrollView>
            <Text>EMPTY</Text>
        </ScrollView>
    );
};