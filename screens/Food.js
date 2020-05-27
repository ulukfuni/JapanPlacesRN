import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()
import FoodModalScreen from './FoodModal'
import ImageButton from '../components/ImageButton'
import foodJson from '../food.json'

function FoodScreen(props) {
	return (
		<View style={styles.container}>
			<Text>This is the food screen for now.</Text>
			{Object.keys(foodJson).map(food => {
				return (
					<ImageButton
						key={food}
						title={food}
						press={() => props.navigation.navigate('FoodType', {
							foodType: food,
							data: foodJson[food],
						})}
					/>
				)
			})}
		</View>
	)
}

function FoodType(props) {
	const { data, foodType } = props.route.params
	return (
		<View style={styles.container}>
			<Text>This is the {foodType} screen for now.</Text>
			{ data && data.length && data.map(food => {
				return (
					<ImageButton
						key={food.name}
						title={food.name}
						onPress={() => props.navigation.navigate('FoodModal', { food })}
					/>
				)
			})}
			<Button
				title="Home"
				onPress={() => props.navigation.navigate('Home')}
			/>
		</View>
	)
}

export default function FoodScreens() {
	return (
		<Stack.Navigator initialRouteName="Food">
			<Stack.Screen name="Food" component={FoodScreen} />
			<Stack.Screen name="FoodType" component={FoodType} />
			<Stack.Screen name="FoodModal" component={FoodModalScreen} />
		</Stack.Navigator>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});