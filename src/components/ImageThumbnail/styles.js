import {StyleSheet} from 'react-native';

export default StyleSheet.create({
	view: {
		backgroundColor: '#B3FCF3',
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'center',
		margin: 5,
	},

    image: {
        width: 125,
        height: 125,
        margin: 10,
    },

	text: {
		fontSize: 12,
		fontWeight: "bold",
		width: 125,
		paddingLeft: 25,
		paddingTop: 10,
	},

	checkmark: {
		position: 'absolute',
		top: 15,
		right: 15,
		fontSize: 16
	}


});
