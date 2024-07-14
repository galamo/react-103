import { MovieType } from "../service";

export function Favorites(props: { movies: Array<MovieType> }) {
    return <div>
        <h1>Favorites</h1>
        <div style={{ background: "lightgreen" }}>
            {props?.movies?.map(m => {
                return <h2> {m.Title} </h2>
            })}
        </div>
    </div>
}