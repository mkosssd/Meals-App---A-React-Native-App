import { useContext, useLayoutEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import IconButton from '../components/IconButton'
import List from '../components/MealDetail/List'
import Subtitle from '../components/MealDetail/Subtitle'
import MealDetails from '../components/MealDetails'
import { MEALS } from '../data/dummy_data'
import { FavoritesContext } from '../store/context/favourites-context'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../store/redux/Favorites'
const MealDetailScreen = ({ route, navigation }) => {
//   const favoriteMealCtx = useContext(FavoritesContext) //USE_CONTEXT
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
  const dispatch = useDispatch()
  const mealId = route.params.mealId
  const mealData = MEALS.find(meal => meal.id === mealId)

  const mealIsFavorite = favoriteMealIds.includes(mealId)
  
  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
    //   favoriteMealCtx.removeFavorite(mealId) //context
	dispatch(removeFavorite({ id: mealId}))
    } else {
    //   favoriteMealCtx.addFavorite(mealId)  //context
	dispatch(addFavorite({id: mealId}))
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            color='white'
            icon={mealIsFavorite ? 'star' : 'star-outline'}
          />
        )
      }
    })
  }, [navigation, changeFavoriteStatusHandler])
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
    alignItems: 'center'
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
