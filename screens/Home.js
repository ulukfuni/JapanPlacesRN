import React from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

import { windowWidth, windowHeight } from '../constants/Layout'
import ImageButton from '../components/ImageButton'

function Home(props) {
	return (
		<View style={styles.container}>
			<ImageButton press={() => props.navigation.navigate('Food')} title="Food" />
			<ImageButton title="Shopping" press={() => props.navigation.navigate('Food')} />
			<ImageButton title="Onsens" press={() => props.navigation.navigate('Food')} />
			<ImageButton title="Cafes" press={() => props.navigation.navigate('Food')} />
		</View>
	)
}

export default function HomeScreen() {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
	},
	touch: {
		width: windowWidth * 0.85,
		height: windowHeight * 0.1,
		borderRadius: 5,
		borderWidth: 0.5,
		borderColor: '#000',
		// alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: 'black',
		flex: 1,
		// position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
	},
	img: {
		marginHorizontal: 50,
		width: 370,
		height: 80,
		borderRadius: 5,
	},
	absoluteView: {
		flex: 1,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},
});