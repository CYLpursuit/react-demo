import React, { useState, useCallback, useEffect } from 'react';
function Parent() {
    const [count, setCount] = useState(1);
    const [val, setVal] = useState('');
 
    const callback = useCallback(() => {
        console.log(count);
        return count+1;
    }, [count]);
    return <div>
        <h4>{count}</h4>
        <Child callback={callback}/>
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <input value={val} onChange={event => setVal(event.target.value)}/>
        </div>
    </div>;
}
 
function Child({ callback }) {
    const [count, setCount] = useState();
    useEffect(() => {
        setCount(callback());
    }, [callback]);
    return <div>
        {count}
    </div>
}

export default Parent;