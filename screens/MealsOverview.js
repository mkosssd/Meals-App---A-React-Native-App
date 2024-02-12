import { StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy_data'
const MealsOverview = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  )
}

export default MealsOverview

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
})
