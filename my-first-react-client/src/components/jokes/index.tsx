import jokesData from "../../jokes.json"

type SingleJoke = typeof jokesData[0]

export function JokesList() {
    return <div>
        {jokesData.map((singleJoke: SingleJoke) => {
            return <div style={{ border: "1px solid black" }}>
                <h2 style={{ background: "yellow" }} >{singleJoke.setup}</h2>
                <h3>{singleJoke.punchline}</h3>
            </div>
        })}
    </div>
}