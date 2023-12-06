import React, { useEffect, useState } from 'react';
import './index.css';


const ExampleWithEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count changed: ${count}`);
        return () => {
            console.log('Cleanup useEffect');
        };
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default ExampleWithEffect;
