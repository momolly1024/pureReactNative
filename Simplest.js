import React, {useState, createContext, useContext} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

function SettingsScreen() {
  const storedEvents = useContext(AppContext);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.Text}>Home page</Text>
      <Text style={styles.Text}>
        value from context: {storedEvents.passValName}
      </Text>
      <Button title="logout" onPress={() => storedEvents.setIsLogin(false)} />
    </View>
  );
}

const AppContext = createContext();

const AppProvider = props => {
  const [isLogin, setIsLogin] = useState(false);
  const passValName = 'molly';
  return (
    <AppContext.Provider value={{isLogin, setIsLogin, passValName}}>
      {props.children}
    </AppContext.Provider>
  );
};

const App = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};
const Home = () => {
  const storedEvents = useContext(AppContext);

  const login = () => {
    storedEvents.setIsLogin(true);
  };

  if (!storedEvents.isLogin) {
    return (
      <View style={styles.loginPage}>
        <Text style={styles.Text}>Login page</Text>
        <TouchableOpacity style={styles.loginBtn} onPress={() => login()}>
          <Text style={styles.Text}>login</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <SettingsScreen />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  loginPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    width: 80,
    height: 40,
    border: '1px solid black',
    backgroundColor: '#00f0cc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 20,
  },
  Text: {fontSize: 20, fontWeight: 'bold', color: 'black'},
});

export default App;
