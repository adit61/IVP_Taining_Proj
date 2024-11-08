import React, { useEffect, useState } from 'react';

const UseEffectHook2 = () => {
    const [count, setCount] = useState(0);  // Fixed state declaration
    const [name, setName] = useState('');  // Added separate state for name

    const clickHandler = () => {
        setCount(count + 1);  // Updates the count on button click
    };

    useEffect(() => {
        console.log("Updating components");  // Log when count changes
        document.title = `Clicked me ${count} times`;  // Update document title
    }, [name]);  // Dependency on count

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={clickHandler}>Clicked me {count} times</button>  {/* Corrected onClick handler */}
            <input 
                type='text' 
                value={name} 
                onChange={e => setName(e.target.value)}  // Handle input change
            />
        </div>
    );
};

export default UseEffectHook2;
