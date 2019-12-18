import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, TextInput, StyleSheet } from 'react-native'

const accessKey =
  'ad6b790cd1db3888100bdfcf14d84c73f0e7300f81aec1d891031922857a2e2b'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('')

  // useEffect(() => {
  const fetchApi = async query => {
    try {
      const api = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${query}`,
      )
      const response = await api.json()
      return response.results
    } catch (error) {
      console.log(error)
    }
  }
  // }, [])

  const onChangeText = txt => {
    setSearchQuery(txt)
    console.log(searchQuery)
  }

  const onSubmitEditing = () => {
    // Search the api for results.

    fetchApi(searchQuery)

    console.log(searchQuery, '🍕')
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="i.e., cars, coffee, cocktails"
          value={searchQuery}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
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
