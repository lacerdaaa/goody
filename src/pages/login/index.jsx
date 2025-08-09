import { colors } from "@/src/styles/colors";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const s = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'flex-start',
        gap: 15,
    },
    headerBox: {
        flexDirection: 'column',
        padding: 20,
        gap: 5
    },
    headerTitle: {
        fontSize: 48,
        fontWeight: 600
    },
    headerSubtitle: {
        fontSize: 16,
        color: colors.secondary.dark.active
    },
    loginBox: {
        maxWidth: '80%',
        backgroundColor: colors.secondary.dark.default,
    },
    inputBox: {

    }

})

const LoginPage = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={s.main}>

                <View>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/chevron-left.png')} style={{ width: 45, height: 45 }} />
                    </TouchableOpacity>
                </View>

                <View style={s.headerBox}>
                    <Text style={s.headerTitle}>Acesse</Text>
                    <Text style={s.headerSubtitle}>com E-mail e Senha</Text>
                </View>

                <View style={s.loginBox}>
                    <View style={s.inputBox}>

                    </View>
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default LoginPage;