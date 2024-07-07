import jokesData from "../../jokes.json";
import { SingleJoke } from "./single-joke";
import css from "./jokes.module.css";
import { useState } from "react";

type SingleJokeType = (typeof jokesData)[0];

export function JokesList() {
  const [filter, setFilter] = useState("");

  const currentJokes = filter
    ? jokesData.filter((joke) =>
        joke.setup.toLowerCase().includes(filter.toLowerCase())
      )
    : jokesData;

  return (
    <div className={css.thisIsGreenBackground}>
      <div>
        <button>Show Only long punchline (more than 10 characters) </button>
        <input
          type="text"
          placeholder="search for joke"
          onChange={(e) => {
            setFilter(e?.target?.value?.toLowerCase());
          }}
        />
        <h3> Result: {currentJokes.length} </h3>
      </div>
      {currentJokes.map((singleJoke: SingleJokeType) => {
        return (
          <SingleJoke
            punchline={singleJoke.punchline}
            jokeId={singleJoke.id}
            description={singleJoke.setup}
            type={singleJoke.type}
          />
        );
      })}
    </div>
  );
}
