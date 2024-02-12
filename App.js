import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import CategoriesScreens from './screens/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverview from './screens/MealsOverview'
import MealDetailScreen from './screens/MealDetailScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FavoriteScreen from './screens/FavoriteScreen'
import {Ionicons} from '@expo/vector-icons'
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator  screenOptions={{
      sceneContainerStyle: { backgroundColor: '#FFE6A7' },
      headerStyle: { backgroundColor: '#BB9457' },
      headerTintColor: '#000',
      drawerContentStyle: {backgroundColor: '#FFE6A7'},
      drawerInactiveTintColor: 'black',
      drawerActiveBackgroundColor: '#BB9457',
      drawerActiveTintColor: 'black'
    }}>
      <Drawer.Screen name='MealsCategories' component={CategoriesScreens} options={{title: 'All Categories',drawerIcon: ({color, size})=><Ionicons name='list ' color={color} size={size}/>}} />
      <Drawer.Screen name='FavoriteScreen' component={FavoriteScreen} options={{title:' Favorite Meals',drawerIcon: ({color, size})=><Ionicons name='star' color={color} size={size}/>}}/>
    </Drawer.Navigator>
  )
}

export default function App () {
  return (
    <>
      <StatusBar style={'dark'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Meals Categories'
         
        >
          <Stack.Screen
            name='Drawer'
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Meals Overview'
            component={MealsOverview}
            // options={({route, navigation})=>{ const catId = route.params.categoryId
            // return {
            //   title: catId
            // }}}
          />
          <Stack.Screen name='Meal Detail' component={MealDetailScreen} options={{title: 'About the Meal'}}/>
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
