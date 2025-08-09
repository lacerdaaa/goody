import { Image, Text, TouchableOpacity, View } from "react-native";
import { colors } from '../styles/colors';
export default function Index({ navigation }) {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: 10,
    }}>
      <Image source={require('../../assets/images/casual_dog.png')} style={{ width: 380, height: 315, marginBottom: 50 }} />

      <View style={{
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
      }}>
        <Text style={{
          fontSize: 48,
          fontWeight: 600
        }}>Ótimo Dia!</Text>

        <Text style={{
          fontSize: 16,
          fontWeight: 500
        }}>Como deseja acessar?</Text>
      </View>

      <View style={{
        flexDirection: 'column',
        gap: 15,
        justifyContent: 'center',
        padding: 10
      }}>
        <TouchableOpacity style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 35,
          backgroundColor: colors.primary[500],
          paddingVertical: 15,
          paddingHorizontal: 60,
          borderRadius: 15,
        }}>
          <Image source={require('../../assets/images/Google.png')} style={{ width: 20, height: 20 }}></Image>
          <Text style={{ color: '#fff' }}>Acessar com o Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#fff",
          borderWidth: 1,
          borderColor: colors.primary[500],
          paddingVertical: 15,
          paddingHorizontal: 60,
          borderRadius: 15,
        }}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: '#000' }}>Outras opções</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
