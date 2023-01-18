import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar} from "react-native";

export default function App(){
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Primeiro Componente</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      marginTop:StatusBar.currentHeight
  },

})