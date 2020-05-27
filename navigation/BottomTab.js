import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/Home'
import FoodScreens from '../screens/Food'

const Tab = createBottomTabNavigator()

export default function Tabs() {
	return (
		<Tab.Navigator screenOptions={({ route }) => ({
			tabBarIcon: ({ focused, color, size }) => {
				let iconName;

				if (route.name === 'Home') {
					iconName = focused
						? 'ios-information-circle'
						: 'ios-information-circle-outline';
				} else if (route.name === 'Food') {
					iconName = focused ? 'ios-list-box' : 'ios-list';
				}

				// You can return any component that you like here!
				return <Ionicons name={iconName} size={size} color={color} />;
			},
		})}
		tabBarOptions={{
			activeTintColor: 'blue',
			inactiveTintColor: 'gray',
		}}>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Food" component={FoodScreens} />
		</Tab.Navigator>
	)
}