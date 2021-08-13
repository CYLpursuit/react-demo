import React, { useState, useContext, createContext } from 'react';
import '../base.css';

// 定义全局变量
const CountContext = createContext();

function Child1() {
    console.log('useContext child');
    // 子组件使用
    const count = useContext(CountContext);

    return (
        <div>子组件count:{count}</div>
    )
}

function Parent() {
    const [count,setCount]=useState(0)
    console.log('useContext');

    const handleClick = () => {
        setCount(count+1);
    }
   
    return (
        <div>
            <h2 className="mt40">使用useContext</h2>
            <h4 className="textLeft">解决组件间传值</h4>
            <div>
                父组件count:{count}
                <button onClick={handleClick}>在父组件+1</button>
                {/* 父组件使用 */}
                <CountContext.Provider value={count}>
                    <Child1></Child1>
                </CountContext.Provider>
            </div>
        </div>
    )
}

export default Parent;