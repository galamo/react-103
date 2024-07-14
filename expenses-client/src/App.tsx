
import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
    Link,
} from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "about",
        element: <About />,
    },
    {
        path: "movies",
        element: <Movies />,
    },
]);

function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App


function Home() {
    return <div>
        <h1>Home</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/about">About</Link>
            <Link to="/movies">movies</Link>
        </div>
    </div>
}

function About() {
    return <div>
        <h1>About</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/">Home</Link>
            <Link to="/movies">movies</Link>
        </div>
    </div>
}

function Movies() {
    return <div>
        <h1>Movies</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/about">About</Link>
            <Link to="/">Home</Link>
        </div>
    </div>
}