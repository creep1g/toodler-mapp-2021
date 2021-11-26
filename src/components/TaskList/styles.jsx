import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#B3FCF3',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 5,
    width: 250,
    borderRadius: 20,
  },
  heading: {
    alignItems: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },

  description: {
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  finished: {
    position: 'absolute',
    top: 5,
    right: 220,
    fontSize: 16,
    color: 'darkgreen',
  },

  notFinished: {
    position: 'absolute',
    top: 5,
    right: 220,
    fontSize: 16,
    color: 'black',
  },

  selected: {
    position: 'absolute',
    top: 5,
    right: 20,
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
