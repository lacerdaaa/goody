import { Image, SafeAreaView, TouchableOpacity, View } from "react-native";

const LoginPage = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column', gap: 15 }}>
            <View>
                <TouchableOpacity>
                    <Image source={require('../../../assets/images/chevron-left.png')} style={{ width: 45, height: 45 }} />
                </TouchableOpacity>
            </View> 

            <View>
                <Text>DASDASDAD</Text>
            </View>

        </SafeAreaView>
    )
};

export default LoginPage;