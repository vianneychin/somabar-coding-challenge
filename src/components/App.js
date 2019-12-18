import React from 'react'
import { SafeAreaView, View, Text, TextInput, StyleSheet } from 'react-native'

const unsplashApi = 'https://api.unsplash.com'

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.imagesContainer}>
        <Text>Test</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  /* Container styles */
  mainContainer: {
    flex: 1,
  },
  inputContainer: {
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagesContainer: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: 'rgb(150, 150, 150)',
    marginLeft: 15,
    marginRight: 15,
  },

  /* Misc. */
  input: {
    backgroundColor: 'white',
    width: '70%',
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'rgb(200, 200, 200)',
  },
})

export default App
