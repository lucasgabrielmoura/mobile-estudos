import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textos}>Open up App.tsx to start workin on your app!</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textos: {
    color: '#fff',
  },
});
