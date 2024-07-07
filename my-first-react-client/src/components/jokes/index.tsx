import jokesData from "../../jokes.json";
import { SingleJoke } from "./single-joke";
import css from "./jokes.module.css";
import { useState } from "react";

type SingleJokeType = (typeof jokesData)[0];

export function JokesList() {
  const [filter, setFilter] = useState("");
  const [onlyLongPunchline, setOnlyLongPunchline] = useState(false);

  const jokesAfterFilter1 = filter
    ? jokesData.filter((joke) =>
        joke.setup.toLowerCase().includes(filter.toLowerCase())
      )
    : jokesData;

  const jokesAfterFilter2 = onlyLongPunchline
    ? jokesAfterFilter1.filter((joke) => joke.punchline.length > 10)
    : jokesAfterFilter1;

  return (
    <div>
      <div>
        <button
          style={{ backgroundColor: onlyLongPunchline ? "green" : "" }}
          onClick={() => {
            setOnlyLongPunchline(!onlyLongPunchline);
          }}
        >
          Only Long Punchline
        </button>
        <input
          type="text"
          placeholder="search for joke"
          onChange={(e) => {
            setFilter(e?.target?.value?.toLowerCase());
          }}
        />
        <h3> Result: {jokesAfterFilter2.length} </h3>
      </div>
      {jokesAfterFilter2.map((singleJoke: SingleJokeType) => {
        return (
          <SingleJoke
            key={singleJoke.id}
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

{
  /* <CountryCard ...JokesList key={name÷÷} /> */
}
