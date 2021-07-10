import React, { useRef } from 'react';

const useRefP = () => {

    const testRef = useRef()

    function alertValue() {
        alert(testRef.current.value);
    }

    return (
        <div >
            <h2>uncontrolled component created with useRef to read data</h2>
            <input ref={testRef} type="text" placeholder="uncontrolled using ref" />
            <button onClick={alertValue}>Alert with input value using useRef</button>
        </div>
    )
} 

export default useRefP;