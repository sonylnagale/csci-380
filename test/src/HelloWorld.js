import React, {useEffect, useState} from 'react';

const HelloWorld = (props) => {
    const {counter, setCoutnter} = useState(0);

    const [incrementCounter] =() =>  {
        setCoutnter(counter + 1)
    }
    return (
        <>
        <div>
                <p>Hello</p>
                <h1>{props.name}</h1>
         </div>

            <div>
                <p>{counter}</p>
            </div>
            <button onclick={incrementCounter}>Increment Me</button>
        </>
    )
}
export default HelloWorld;