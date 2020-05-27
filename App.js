import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';

import FoodScreens from './screens/Food'
import HomeScreen from './screens/Home'

import BottomTabs from './navigation/BottomTab'

function DetailsScreen() {
	return (
		<View style={styles.container}>
				<Text>Open up App.js to start working on your app!</Text>
			</View>
	)
}

const Stack = createStackNavigator()

export default function App() {
  return (
		<NavigationContainer>
			<BottomTabs />
		</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
