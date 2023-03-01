import { StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Shopping from './src/screen/shopping';
import Header from './src/components/header';

const Stack = createStackNavigator();

function shoppingScreen() {
  return (
    <Shopping />
  );
}
// import AppLoading from 'expo-app-loading';

// import {
//   useFonts,
//   Roboto_300Light,
//   Roboto_400Regular,
//   Roboto_500Medium,
//   Roboto_700Bold,
// } from '@expo-google-fonts/roboto';

export default function App() {

  // let [fontsLoaded] = useFonts({
  //   Roboto_300Light,
  //   Roboto_400Regular,
  //   Roboto_500Medium,
  //   Roboto_700Bold,
  // });
  
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } 
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Shopping"
          component={shoppingScreen}
          options={{ 
            header: () => (
              <Header />
            )
         }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center', 
  },
});

