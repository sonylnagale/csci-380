import {useState, useEffect } from 'react';

const Hooks = () => {
    const [counter, setCounter] = useState(0);
    const favoriteFoods = ['vietnamese', 'southern style','greek','colombian'];
    
    useEffect(() => {
        if (counter % 2 ===0) {
            alert(favoriteFoods[counter]);
        }
    },[counter])

    return (
        <div> 
            <button onClick={() => { setCounter(counter + 1); }}>Increment</button>
            <p>{counter}</p>
            </div>
    )
}
export default Hooks;