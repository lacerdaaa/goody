import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '.';
import LoginPage from '../pages/login/index';

export default function RootLayout() {

  const Stack = createNativeStackNavigator()
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{
            headerShown: false
          }}  name='Home' component={Index}></Stack.Screen>
          <Stack.Screen  options={{
            headerShown: false,
          }} name='Login' component={LoginPage}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  )
}


