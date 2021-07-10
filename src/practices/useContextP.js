import React, { useContext } from 'react';

const Context = React.createContext();

const Child = () => {
    return <GrandChild />
}

const GrandChild = () => {
    const context = useContext(Context); 
    return <h1>{context}</h1>
}


export default function testComponent() {
    return (
        <Context.Provider value="useContext value skipped to grandchild">
            <Child />
        </Context.Provider>
    )
}