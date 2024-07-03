
import './App.css'
import { HowDoILookLike } from './components/how-do-i-look-like';
import { JokesList } from './components/jokes';
import { WhatIsYourName } from './components/whats-your-name';

export default function App() {

    return (
        <>
            <h1 style={{ color: "red" }} >Hello</h1>
            <WhatIsYourName />
            <HowDoILookLike />
            <JokesList />
        </>
    )
}





