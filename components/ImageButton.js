import React from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { windowWidth, windowHeight } from '../constants/Layout'

export default function ImageButton(props) {
	return (
		<TouchableOpacity style={styles.touch} onPress={() => props.press()}>
			<Text>{props.title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	touch: {
		width: windowWidth * 0.85,
		height: windowHeight * 0.1,
		borderRadius: 5,
		borderWidth: 0.5,
		borderColor: '#000',
		justifyContent: 'center',
	},
});