
import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Home } from './components/pages/home';
import Movies from './components/pages/movies';

import { Root } from './components/pages/root';
import Movie from './components/pages/movie';
import FavoritesPage from './components/pages/favorites';
import { FavoriteContextWrapper } from './components/context';


export const routes = [
    {
        path: "home",
        label: "Home",
        visible: true,
        element: <Home />,
    },
    {
        path: "movies",
        label: "Movies",
        visible: true,
        element: <Movies />,

    },
    {
        path: "favorites",
        label: "Favorites",
        visible: true,
        element: <FavoritesPage />,
    },
    {
        path: "statistics",
        label: "Statistics",
        visible: true,
        element: <FavoritesPage />,
    },
    {
        path: "movie/:id",
        label: "Single movie",
        visible: false,
        element: <Movie />,
    },
]
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: routes,
    },
]);


function App() {


    return (
        <>
            <FavoriteContextWrapper >
                <RouterProvider router={router} />
            </FavoriteContextWrapper>
        </>
    )
}

export default App





// const data = [{ movieName: "scream", numberOfLikes: 50 }, { movieName: "scream", numberOfLikes: 50 }]

// type MoviesObjType = {
//     [key: string]: number
// }
// const result = data.reduce((objMovies: MoviesObjType, currentMovie) => {
//     if (!objMovies[currentMovie.movieName]) {
//         objMovies[currentMovie.movieName] = currentMovie.numberOfLikes
//     }
//     return objMovies
// }, {} as MoviesObjType)


// const dataReady = { "scream": 50, "scream2": 63 }
