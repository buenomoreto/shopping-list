import { useEffect } from 'react';
import { StyleSheet, BackHandler, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Shopping from './src/screen/shopping';
import Header from './src/components/header';

import ListProvider from './src/contexts/list';

const Stack = createStackNavigator();

function ShoppingScreen() {
  return (
    <Shopping />
  );
}

const backAction = () => {
  Alert.alert("Atenção!", "Tem certeza que deseja sair?", [
    {
      text: "Cancelar",
      onPress: () => null,
      style: "cancel"
    },
    { 
      text: "SIM", 
      onPress: () => BackHandler.exitApp() 
    }
  ]);
  return true;
};

export default function App() { 

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
  
    return () =>
    BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <NavigationContainer style={styles.container}>
      <ListProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Shopping"
            component={ShoppingScreen}
            options={{ 
              header: () => (
                <Header />
              )
          }}
          />
        </Stack.Navigator>
      </ListProvider>
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

