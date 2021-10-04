import React, { useEffect,useState} from 'react';

const Helloworld = () => {
    const[counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1)
    }
    return(
        <>
            <>
                <p>Hello</p>
                <h1>World</h1>
            </>
            <div><p>{counter}</p></div> 
            <button onClick={incrementCounter}>Increment me</button>  
        </>
        )
}

export default Helloworld;