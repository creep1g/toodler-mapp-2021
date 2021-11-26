import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  view: {
    backgroundColor: '#B3FCF3',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 5,
    borderColor: '#33fbF0',
    padding: 10,
    borderWidth: 0.4,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 4,
  },

  image: {
    width: 125,
    height: 125,
    margin: 10,
  },

  text: {
    fontSize: 12,
    fontWeight: 'bold',
    width: 125,
    paddingTop: 10,
    textAlign: 'center',
  },

  checkmark: {
    position: 'absolute',
    top: 15,
    right: 15,
    fontSize: 16,
  },

});
