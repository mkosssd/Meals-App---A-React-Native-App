import { createContext, useState } from 'react'

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: id => {},
  removeFavorite: id => {}
})

function FavoritesContextProvider ({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([])
  function addFavoriteMeal (id) {
    setFavoriteMealIds(current => [...current, id])
  }
  function removeFavoriteMeal (id) {
    setFavoriteMealIds(current => current.filter(mealId => mealId !== id))
  }
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavoriteMeal,
    removeFavorite: removeFavoriteMeal
  }
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}
export default FavoritesContextProvider
