import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    margin: 10,
    width: 150,
    borderRadius: 20,
    padding: 10,
    borderColor: 'lightgray',
    borderWidth: 0.3,
  },

  name: {
    overflow: 'hidden',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    width: 100,
    padding: 10,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 10,
    backgroundColor: '#fff',
    borderColor: 'lightgray',
    borderWidth: 0.3,
    borderRadius: 20,
  },

  selected: {
    position: 'absolute',
    top: 5,
    right: 10,
    fontSize: 16,
  },

  shadow: {
    // Shadow for iOS
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    // Elevation for android
    elevation: 4,
  },
});
