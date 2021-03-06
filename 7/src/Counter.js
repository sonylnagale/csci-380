import { React, useState } from 'react';

export const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <button onClick={() => { setCount(count + 1) }}>Click to Increment</button>
            <div>{count}</div>
        </>
    )
}