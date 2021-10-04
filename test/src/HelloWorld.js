import React, { useEffect, useState } from 'react';

const HelloWorld = (props) => {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <>
                <p>Hello</p>
                <h1>{props.name}</h1>
            </>
            <div><p>{counter}</p></div>
            <button onClick={incrementCounter}>Increment Me</button>
        </>
    )
}

export default HelloWorld;