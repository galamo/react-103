// @ts-nocheck

import { createContext, useState } from 'react';
import { MovieType } from '../pages/movies/service';
type FavoritesType = {
    favorites: Array<MovieType>,
    setFavorites: (arr: Array<MovieType>) => void
}
export const FavoritesContext = createContext<FavoritesType>({} as FavoritesType)

export function FavoriteContextWrapper({ children }: { children: any }) {
    const [favorites, setFavorites] = useState([])

    return <FavoritesContext.Provider value={{ favorites, setFavorites }}>
        {children}
    </FavoritesContext.Provider>
}