import { FlatList, Text } from 'react-native'
import { CATEGORIES } from '../data/dummy_data'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = ({ navigation }) => {
  const itemRenderer = itemData => {
    const pressHandler = () => {
		navigation.navigate('Meals Overview', {
			categoryId : itemData.item.id
		})
	}
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    )
  }
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={itemRenderer}
      keyExtractor={item => item.id}
      numColumns={2}
    ></FlatList>
  )
}
export default CategoriesScreen
