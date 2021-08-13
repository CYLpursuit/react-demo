import React, { useState, useEffect, useCallback } from 'react';
import CallbackChild from './callbackChild';
import '../base.css';

const WithCallback = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    console.log('useCallback');

    const increaseCounter1 = useCallback(() => {
        console.log('increaseCounter1的useCallback');
        setCount1(count1 + 1)
    }, [count1]);
    const increaseCounter2 = useCallback(() => {
        console.log('increaseCounter2的useCallback');
        setCount2(count2 + 1)
    }, [count2]);

    useEffect(() => {
        console.log('count1 change');
    }, [count1]);

    useEffect(() => {
        console.log('count2 change');
    }, [count2]);

    useEffect(() => {
        console.log('increaseCounter1 change');
    }, [increaseCounter1]);

    useEffect(() => {
        console.log('increaseCounter2 change');
    }, [increaseCounter2]);

    return <div>
        <h2 className="mt40">使用useCallback</h2>
        <h4 className="textLeft">解决函数/组件的重复渲染问题，返回的是一个函数，可传递给子组件作为回调函数使用</h4>
        <ol className="textLeft">
            <li>useCallback返回的是函数，主要用来缓存函数，因为函数式组件中的state的变化都会导致整个组件被重新init（即使一些函数没有必要被init），此时用useCallback就会将函数进行缓存，减少渲染时的性能损耗​；只有在依赖数据发生变化后，才会重新计算结果，起到缓存的作用。</li>
        </ol>
        {/* 两个相同的组件，更新其中一个时另一个并不会重新渲染 */}
        <CallbackChild value={count1} clickHandle={increaseCounter1}/>
        <CallbackChild value={count2} clickHandle={increaseCounter2} />
    </div>;
}

export default WithCallback;