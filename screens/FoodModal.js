import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

function FoodModalScreen(props) {
	useEffect(() => {
		console.log(props)
	}, [])
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => props.navigation.goBack()} title="Dismiss" />
    </View>
	)
}

export default function FoodModalStack() {
	return (
		<Stack.Navigator mode="modal" headerMode="none">
			<Stack.Screen name="FoodModal" component={FoodModalScreen} />
		</Stack.Navigator>
	)
}