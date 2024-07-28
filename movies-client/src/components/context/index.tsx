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
    let favoritesInitialData = []
    let timeInitialData = false;
    try {
        favoritesInitialData = JSON.parse(localStorage.getItem("favorites")) || []
        let value = localStorage.getItem("time")
        if (value === 'false') {
            timeInitialData = false;
        } else {
            timeInitialData = true
        }
    } catch (error) {

    }
    const [favorites, setFavorites] = useState(favoritesInitialData as Array<MovieType>)
    const [toggleTime, setToggleTime] = useState(timeInitialData)

    function setFavoritesWrapper(favorites: Array<MovieType>) {
        setFavorites(favorites)
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }
    function setToggleTimeWrapper(toggleTime: boolean) {
        setToggleTime(toggleTime)
        localStorage.setItem("time", toggleTime)
    }

    return <>
        <SettingsContext.Provider value={{ toggleTime, setToggleTime: setToggleTimeWrapper }}>
            <FavoritesContext.Provider value={{ favorites, setFavorites: setFavoritesWrapper }}>
                {children}
            </FavoritesContext.Provider>
        </SettingsContext.Provider>
    </>
}