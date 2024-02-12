import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import CategoriesScreens from './screens/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverview from './screens/MealsOverview'

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Meals Categories'>
          <Stack.Screen name='Meals Categories' component={CategoriesScreens} />
          <Stack.Screen name='Meals Overview' component={MealsOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </> 
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 25
  }
})
