import { useContext } from "react"
import { StyleSheet, Text, View } from "react-native"
import { FavoritesContext } from "../store/context/favourites-context"
import MealsList from "../components/MealsList/MealsList"
import { MEALS } from "../data/dummy_data"
import { useSelector } from "react-redux"

const FavoriteScreen = () => {
    // const FavoriteCtx = useContext(FavoritesContext) //use-context
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
    // const FavoriteMeals = MEALS.filter(meal => FavoriteCtx.ids.includes(meal.id))
    const FavoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id))
    if(FavoriteMeals.length === 0 ){
        return (
            <View style={styles.noFavorites}>
                <Text style={styles.text}>No Favorite Meal Added Yet!</Text>
            </View>
        )
    }
    return <MealsList items={FavoriteMeals}/>
}

export default FavoriteScreen

const styles = StyleSheet.create({
    noFavorites: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})