import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Platform
} from 'react-native';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* StatusBar styling */}
      <StatusBar backgroundColor="#cb202d" barStyle="light-content" />
      {Platform.OS === 'android' && StatusBar.setBackgroundColor('#cb202d')}

      {/* Home Screen */}
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default App;
