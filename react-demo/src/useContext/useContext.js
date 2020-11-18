import React, { useState, useContext, createContext } from 'react';

// 定义全局变量
const CountContext = createContext();

function Child1() {
    // 子组件使用
    const count = useContext(CountContext);

    return (
        <div>{count}</div>
    )
}

function Parent() {
    const [count,setCount]=useState(0)
    console.log('parent');

    const handleClick = () => {
        setCount(count+1);
    }
   
    return (
        <div>
            点击{count}
            <button onClick={handleClick}>clickme in parent</button>
            其次是作为父组件将值传递过去，Provider 相当于提供者，Child是子组件
            {/* 父组件使用 */}
            <CountContext.Provider value={count}>
                <Child1></Child1>
            </CountContext.Provider>
        </div>
    )
}

export default Parent;