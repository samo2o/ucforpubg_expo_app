import { Text } from "react-native";
import { marakazi } from "../constants/fonts";


export default function Rules() {
    return (
        <Text className="text-right mx-4" style={marakazi.regular}>
            <Text className="text-md" style={marakazi.bold}>1. لا تستخدم حسابات متعددة</Text>{'\n'}
            يرجى عدم استخدام حسابات متعددة والالتزام بحساب واحد حتى يضمن النزاهة وتجربة أفضل للجميع.
            {'\n'}
            {'\n'}
            <Text className="text-md" style={marakazi.bold}>2. لا تستخدم اي VPN</Text>{'\n'}
            يرجى عدم استخدام اي خدمات الشبكة الخاصة الافتراضية. ذلك يساعد في الحفاظ على نزاهة البناء للجميع.
            {'\n'}
            {'\n'}
            <Text className="text-md" style={marakazi.bold}>3. استكمال المهام الهامة</Text>{'\n'}
            قبل الطلب المكافأة. يجب عليك أولا إكمال المهام الهامة.
        </Text>
    );
};
