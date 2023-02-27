import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.mainHeading}>Password Generator</Text>
      <View>
        <Text>Password Length</Text>
        <TextInput></TextInput>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20
  },
  mainHeading: {
    fontWeight:'bold',
    fontSize: 30,
    marginBottom: 30,
  }
})