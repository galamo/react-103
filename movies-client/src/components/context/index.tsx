import { createContext } from 'react';
import { MovieType } from '../pages/movies/service';
type FavoritesType = {
    favorites: Array<MovieType>,
    setFavorites: (arr: Array<MovieType>) => void
}
export const FavoritesContext = createContext<FavoritesType>({} as FavoritesType)
