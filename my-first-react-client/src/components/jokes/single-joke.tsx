import { useState } from "react";

type Props = {
  jokeId: number;
  punchline: string;
  description: string;
  type: string;
};

export function SingleJoke(props: Props) {
  const [youLikeThis, setYouLikeThis] = useState(false);
  const [showPunchline, setShowPunchline] = useState(false);

  return (
    <div
      style={{
        border: "1px dashed black",
        margin: "20px",
        background: "lightgreen",
      }}
    >
      <h2>{props.jokeId}</h2>
      <h3>😂</h3>
      <h2 style={{ background: "green" }}>{props.description}</h2>
      <h3>
        {showPunchline ? (
          props.punchline
        ) : (
          <button
            onClick={() => {
              setShowPunchline(true);
            }}
          >
            Show Punchline
          </button>
        )}
      </h3>
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
