import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text>Hello from Axios</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
