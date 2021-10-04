import React, {useEffect, useState } from 'react';

const HelloWorld = (props) => {
    const[counter, setCounter] = useState(0);


    const IncrementCounter = () => {

        setCounter(counter + 1)
    }
    
    return(
        <>
            <div>
            <p>Hello</p>
            <h1>WORLD!</h1>
            <h1>{props.name}</h1>
            </div>

        <div>
            <p>Hello</p>
            <p>{counter}</p>
            <button onClick={IncrementCounter}>Increment Me</button>
        </div>
        </>
    )
}

export default HelloWorld;

