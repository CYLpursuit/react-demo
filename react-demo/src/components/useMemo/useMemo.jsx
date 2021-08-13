import React, { useState, useMemo } from 'react';
import MemoChild from './memoChild';
import '../base.css';

export default function WithMemo() {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
    console.log('useMemo');

    // 计算属性
    const expensive = useMemo(() => {
        console.log('computed');
        let sum = 0;
        for (let i = 0; i <= count; i++) {
            sum += i;
        }
        return sum;
    }, [count]);
 
    return <div>
        <h2 className="mt40">使用useMemo,memo</h2>
        <h4 className="textLeft">解决函数/子组件的重复渲染问题，返回的是一个值/组件</h4>
        <ol className="textLeft">
            <li>memo：用来缓存组件，由于通常情况下父组件渲染子组件随之重新渲染，使用memo后对子组件的渲染依据props进行简单比对缓存，无改动时不会频繁渲染子组件。但props.children每次均会根据父组件的init重新init，导致props是变化的，就失去了缓存的效果</li>
            <li>useMemo写法：同useEffect写法类似，可添加依赖项。</li>
            <li>useMemo渲染时机：有返回值的，而返回值可以直接参与渲染的，所以useMemo是在渲染期间完成的。</li>
            <li>useMemo场景作用：返回的是计算的结果值，用于缓存计算后的状态，只有在依赖数据发生变化后，才会重新计算结果，起到缓存的作用。类似于vue的计算属性。</li>
        </ol>
        <p>count:{count}-inputVal:{val}-count累和:{expensive}</p>
        <div>
            <button onClick={() => setCount(count + 1)}>count+1/改动时count累和才重新渲染</button>
            <input value={val} onChange={event => setValue(event.target.value)}/>
        </div>
        <MemoChild value={val}/>
    </div>;
}