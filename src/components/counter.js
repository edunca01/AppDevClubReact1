import {React, useState} from "react"; 

function Counter(props) {
    const [count, setCount] = useState(10);

    function increment() {
        setCount(count+1);
    }

    function deincrement() {
        if(count !== 0){
            setCount(count-1);
        }
    }

    return (
        <>
            <button onClick={increment}>+</button>
            <h1>{count}</h1>
            <button onClick={deincrement}>-</button>
        </>
    );
};

export default Counter;