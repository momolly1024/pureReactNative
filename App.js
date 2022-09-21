import React, {useContext} from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StoreContext, StoreProvider} from './GlobalState/Store';

function HomeScreen({navigation}) {
  const {value, setValue, value1, setValue1, value2, setValue2} =
    useContext(StoreContext);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>{value}</Text>
      <Text>{value1}</Text>
      <Text>{value2}</Text>
      <Button
        title="++++"
        onPress={() => {
          setValue(value + 1);
          setValue1(value1 + 1);
          setValue2(value2 + 1);
        }}
      />

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  const {value, setValue, value1, setValue1, value2, setValue2} =
    useContext(StoreContext);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>{value}</Text>
      <Text>{value1}</Text>
      <Text>{value2}</Text>
      <Button
        title="+++"
        onPress={() => {
          setValue(value + 1);
          setValue1(value1 + 1);
          setValue2(value2 + 1);
        }}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
