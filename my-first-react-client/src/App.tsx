
import './App.css'
import { HowDoILookLike } from './components/how-do-i-look-like';
import { JokesList } from './components/jokes';
import { SingleJoke } from './components/jokes/single-joke';
import { WhatIsYourName } from './components/whats-your-name';

export default function App() {

    return (
        <>
            <h1 style={{ color: "red" }} >Hello</h1>
            <h1> Joke of the week</h1>
            <SingleJoke description='aa' type='aa' jokeId={111} punchline='sss' />
            <WhatIsYourName />
            <HowDoILookLike />
            <JokesList />

        </>
    )
}





