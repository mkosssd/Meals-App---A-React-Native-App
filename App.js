import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import CategoriesScreens from './screens/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverview from './screens/MealsOverview'
import MealDetailScreen from './screens/MealDetailScreen'

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <>
      <StatusBar style={'dark'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Meals Categories'
          screenOptions={{
            contentStyle: { backgroundColor: '#FFF6E9' },
            headerStyle: { backgroundColor: '#BED1CF'},
            headerTitleStyle: {color: '#24180f'}
          }}
        >
          <Stack.Screen name='Meals Categories' component={CategoriesScreens} options={{ title: 'All Categories' }}/>
          <Stack.Screen name='Meals Overview' component={MealsOverview} 
            // options={({route, navigation})=>{ const catId = route.params.categoryId
            // return {
            //   title: catId
            // }}}
          />
          <Stack.Screen name='Meal Detail' component={MealDetailScreen}/>
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
    // marginTop: 25
  }
})
