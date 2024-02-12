import { useNavigation } from '@react-navigation/native'
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Platform
} from 'react-native'
import MealDetails from './MealDetails'
const MealItem = mealItemProps => {
  const navigation = useNavigation()
  const selectMealHandler = () => {
    navigation.navigate('Meal Detail', {
      mealId: mealItemProps.id
    })
  }
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: '#ccc' }} onPress={selectMealHandler} style={({ pressed }) => {
          pressed ? styles.buttonPressed : null
        }}
      >
        <View>
          <View style={styles.innerContainer}>
            <Image
              source={{ uri: mealItemProps.imageUrl }}
              style={styles.image}
            />
            <Text style={styles.mealName}>{mealItemProps.title}</Text>
          </View>
          <MealDetails {...mealItemProps}/>
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  },
  mealName: {
    fontSize: 17,
    fontWeight: '900',
    textAlign: 'center',
    padding: 8
  },
  mealItem: {
    margin: 15,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 8,
    shadowColor: 'black', //Shadow style for iOS
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: Platform.OS === 'android' ? 'hidden' : 'scroll'
  },

  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  buttonPressed: {
    opacity: 0.5
  }
})
