import { Image, ScrollView, StyleSheet, Text, View,Button } from 'react-native'
import { MEALS } from '../data/dummy_data'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'
import { useLayoutEffect } from 'react'
const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId
  const mealData = MEALS.find(meal => meal.id === mealId)
  const addMeHandler = () => {
	console.log('ADD ME');
  }
  useLayoutEffect(() => {
	navigation.setOptions({
		headerRight: ()=>{
			return <Button title='Add Me' onPress={addMeHandler}/>
		}
	})
  }, [navigation, addMeHandler])
  return (
    <ScrollView style={{ marginVertical: 10, paddingHorizontal: 10 }}>
      <Image source={{ uri: mealData.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{mealData.title}</Text>
      <MealDetails {...mealData} />
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List mealData={mealData.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List mealData={mealData.steps} />
        </View>
      </View>
    </ScrollView>
  )
}
export default MealDetailScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 8
  },
  title: {
    fontWeight: '800',
    textAlign: 'center',
    fontSize: 24,
    marginTop: 12
  },
  innerContainer: {
    width: '80%'
  }
})
