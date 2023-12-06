import React, { useRef, useEffect } from 'react';
import './index.css';


const ExampleWithRef = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <label>
                Enter your name:
                <input type="text" ref={inputRef} />
            </label>
        </div>
    );
};

export default ExampleWithRef;
