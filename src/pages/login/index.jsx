import { colors } from "@/src/styles/colors";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const s = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'flex-start',
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
        paddingHorizontal: 30,
        gap: 15
    },
    inputBox: {
        flexDirection: 'column',
        gap: 5,
    },
    input: {
        padding: 15,
        minHeight: 60,
        backgroundColor: colors.neutral[100],
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
                        <Text>E-mail</Text>
                        <TextInput style={s.input} placeholder="Informe seu e-mail." />
                    </View>

                    <View style={s.inputBox}>
                        <Text>Senha:</Text>
                        <TextInput style={s.input} placeholder="Informe sua senha" />
                    </View>
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default LoginPage;