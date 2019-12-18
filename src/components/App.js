import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, TextInput, StyleSheet } from 'react-native'

const accessKey =
  'ad6b790cd1db3888100bdfcf14d84c73f0e7300f81aec1d891031922857a2e2b'
const secretKey =
  '9af57a2345249a02ae5a2a072644aa9ccb05f5f4d755a959d011c7f54f5f4a96'

const unsplashApi = `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=coffee`

const App = () => {
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const api = await fetch(unsplashApi)
        const response = api.json()
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    // fetchApi()
  }, [])

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="i.e., cars, coffee, cocktails"
          style={styles.input}
        />
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
    paddingLeft: 20,
    paddingRight: 20,
  },
})

export default App
