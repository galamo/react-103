import jokesData from "../../jokes.json"
import { SingleJoke } from "./single-joke"

type SingleJokeType = typeof jokesData[0]

export function JokesList() {
    return <div>
        {jokesData.map((singleJoke: SingleJokeType) => {
            return <SingleJoke punchline={singleJoke.punchline}
                jokeId={singleJoke.id}
                description={singleJoke.setup}
                type={singleJoke.type} />
        })}
    </div>
}
