// @ts-nocheck

import { createContext, useState } from 'react';
import { MovieType } from '../pages/movies/service';
type FavoritesType = {
    favorites: Array<MovieType>,
    setFavorites: (arr: Array<MovieType>) => void
}
type SettingsType = {
    toggleTime: boolean,
    setToggleTime: (p: boolean) => void
}
export const FavoritesContext = createContext<FavoritesType>({} as FavoritesType)
export const SettingsContext = createContext<SettingsType>({} as SettingsType)


export function ContextWrapper({ children }: { children: any }) {
    const [favorites, setFavorites] = useState([])
    const [toggleTime, setToggleTime] = useState(false)

    return <>
        <SettingsContext.Provider value={{ toggleTime, setToggleTime }}>
            <FavoritesContext.Provider value={{ favorites, setFavorites }}>
                {children}
            </FavoritesContext.Provider>
        </SettingsContext.Provider>
    </>
}