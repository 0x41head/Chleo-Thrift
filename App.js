import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from './screens/SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NotificationScreen from './screens/NotificationScreen';
import UserScreen from './screens/UserScreen';

const Tab = createBottomTabNavigator();

function BottomNavTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Home' component={HomeScreen}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({color, size}) => (
						<MaterialCommunityIcons name='home' color={color} size={size} />
					),
				}} />
			<Tab.Screen name='Notification' component={NotificationScreen}
				options={{
					tabBarLabel: 'Notification',
					tabBarIcon: ({color, size}) => (
						<MaterialCommunityIcons name='bell' color={color} size={size} />
					),
				}} />
			<Tab.Screen name='Settings' component={SettingsScreen}
				options={{
					tabBarLabel: 'Settings',
					tabBarIcon: ({color, size}) => (
						<MaterialCommunityIcons name='cog' color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen name='User' component={UserScreen}
				options={{
					tabBarLabel: 'User',
					tabBarIcon: ({color, size}) => (
						<MaterialCommunityIcons name='account' color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

function App() {
	return (
		<NavigationContainer>
			<BottomNavTabs />
		</NavigationContainer>
	);
}

export default App;
