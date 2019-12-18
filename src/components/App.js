import React, { useState } from 'react'
import { SafeAreaView, View, TextInput, Image, ScrollView } from 'react-native'

import styles from './styles'

const accessKey =
  'ad6b790cd1db3888100bdfcf14d84c73f0e7300f81aec1d891031922857a2e2b'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [unsplashData, setUnsplashData] = useState([])

  const fetchApi = async query => {
    try {
      const api = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${query}`,
      )
      const response = await api.json()
      setUnsplashData(response.results)
      console.log(response.results)
    } catch (error) {
      console.log(error)
    }
  }

  const onChangeText = txt => {
    setSearchQuery(txt)
  }

  const onSubmitEditing = () => {
    fetchApi(searchQuery)
  }

  const renderPhotos = () => {
    return unsplashData.map(item => (
      <View key={item.id} style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={{
            uri: item.urls.small,
          }}
        />
      </View>
    ))
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
      <View style={styles.outerImageContainer}>
        <ScrollView contentContainerStyle={styles.imagesContainer}>
          {renderPhotos()}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default App
