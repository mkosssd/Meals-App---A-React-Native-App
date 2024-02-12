import { StyleSheet, Text, View } from 'react-native'

const List = ({ mealData }) => {
  return mealData.map(data => (
    <View style={styles.ListContainer}>
      <Text style={styles.List} key={data}>
        {data}
      </Text>
    </View>
  ))
}
export default List

const styles = StyleSheet.create({
  List: {
    textAlign: 'center',
    borderRadius: 6,
    paddingHorizontal: 5,
    paddingVertical: 4,
    color: 'white'
  },
  ListContainer: {
    backgroundColor: 'black',
    borderRadius: 6,
    paddingHorizontal: 5,
    paddingVertical: 4,
    marginVertical: 2
  }
})
