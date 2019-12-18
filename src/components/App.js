import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native'

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
    return unsplashData.map((item, index) => {
      return (
        <View key={item.id} style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={{
              uri: item.urls.small,
            }}
          />
        </View>
      )
    })
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

const styles = StyleSheet.create({
  /* Container styles */
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgb(240, 240, 240)',
  },
  inputContainer: {
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerImageContainer: {
    flex: 1,
  },
  imagesContainer: {
    paddingTop: 40,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    borderTopWidth: 1,
    borderColor: 'rgb(150, 150, 150)',
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
  imageWrapper: {
    backgroundColor: 'white',
  },
  image: {
    backgroundColor: 'pink',
    height: 125,
    aspectRatio: 1.45,
    margin: 2.5,
  },
})

export default App
