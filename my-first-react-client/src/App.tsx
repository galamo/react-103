
import './App.css'

export default function App() {

    return (
        <>
            <h1 style={{ color: "red" }} >Hello</h1>
            <WhatIsYourName />

        </>
    )
}


function WhatIsYourName() {
    return <h1> {getYourName()} </h1>
}

function getYourName() {
    return "Gal Amouyal"
}


