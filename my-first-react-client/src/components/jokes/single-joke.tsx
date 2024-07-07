import { useState } from "react";

type Props = {
  jokeId: number;
  punchline: string;
  description: string;
  type: string;
};

export function SingleJoke(props: Props) {
  const [youLikeThis, setYouLikeThis] = useState(false);

  return (
    <div style={{ border: "1px dashed black" }}>
      <h2>{props.jokeId}</h2>
      <h3>😂</h3>
      <h2 style={{ background: "green" }}>{props.description}</h2>
      <h3>{props.punchline}</h3>
      <h6>{props.type}</h6>
      <div>
        <button
          onClick={() => {
            setYouLikeThis(!youLikeThis);
          }}
        >
          👍 {youLikeThis ? "You Like This" : null}
        </button>
      </div>
    </div>
  );
}
