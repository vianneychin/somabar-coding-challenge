import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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
    backgroundColor: 'grey',
    height: 125,
    aspectRatio: 1.45,
    margin: 2.5,
  },
})
