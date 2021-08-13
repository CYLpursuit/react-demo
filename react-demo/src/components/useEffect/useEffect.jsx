import React, { useEffect, useState, useCallback } from 'react';
import {useHistory} from 'react-router-dom';
import '../base.css';

let timer;
const WithEffect = () => {
      const [count, setCount] = useState(0);
      const [countObj, setCountObj] = useState({count:0, test:0});
      const [countWithoutEffect, setCountWithoutEffect] = useState(0);
      const history = useHistory();
      console.log('useEffect');

      // state:count的effect
      useEffect(() => {
            console.log('count的effect');
      }, [count])

      // state:countObj的effect
      useEffect(() => {
            console.log('countObj的effect');
      }, [countObj.test])

      // fn:staticFn的effect
      const staticFn = useCallback(() => {
            console.log('staticFn');
       }, []);

      useEffect(() => {
            console.log('staticFn的effect');
       }, [staticFn]);

      // 定时器的effect
      useEffect(() => {
            console.log('setInterval的effect');
            return () => {
                  console.log('销毁');
                  clearInterval(timer);
            };
      }, []);

      const autoAdd = () => {
            timer = setInterval(() => {
                  console.log('setInterval');
            }, 1000);
      };

      return (
            <div>
                  <h2 className="mt40">使用useEffect</h2>
                  <h4 className="textLeft">用于在渲染后根据依赖添加“副作用”</h4>
                  <ol className="textLeft">
                        <li >执行时机：useEffect执行的是“副作用”，是在渲染后执行某些操作。它在第一次渲染之后和每次更新(取决于第二个参数依赖项)之后都会执行。但会保证在任何新的渲染前执行且在开始新的更新前，React 总会先清除上一轮渲染的 effect。</li>
                        <li>建议写法：使用多个Effect实现关注点分离，多个useEffect副作用拆分为多个，互不影响。</li>
                        <li>依赖项使用：
                              <br/>3.1 第二个参数为依赖项数组，只有该依赖变化时才执行，可以填写state属性（包括对象类型，由于state是替换，每次都是新的值，为了实现真正的对象属性监听，需要指明属性）；也可以填写函数fn，但由于函数一般定义在组件内，一旦组件重新渲染时，函数就会不断重新init，所以，最好结合useCallback使用，避免函数重复init。
                              <br/>3.2 如果数组中有多个元素，即使只有一个元素发生变化，React也会执行effect。
                              <br/>3.3 尽可能全的使用第二个依赖项数组参数。如果没有正确地指定所有的依赖，可能会在effect中获得“旧值”，比如如果一个 effect 指定了 [] 作为第二个参数，但在内部读取了 someProp，它会一直「看到」 someProp 的初始值。解决办法是要么移除依赖数组，要么修正它。因此当effect内部表达式或者函数调用需要获取数据最新准确的值时，就必须将相依赖的变量全部补充到依赖数组中。或者把这个函数移动到 effect 内部定义，就可以清楚地看到它用到的值并添加到依赖数组中。</li>
                        <li>清除副作用：在React组件中有两种常见副作用操作：需要清除的和不需要清除的。个别订阅外部数据源的场景需要使用return函数清除副作用，以免造成内存泄漏，该return函数在页面销毁前执行。</li>
                  </ol>
                  <ul className="textLeft">
                        <li>异步获取数据后的赋值（取消请求）；</li>
                        <li>使用setInterval或者setTimeout的（清除定时器）；</li>
                        <li>添加监听事件addEventListener的（清除监听）。</li>
                  </ul>
                  <div><button onClick={() => { setCount(count + 1)}}>点击属性count+1</button><span>count:{ count}</span></div>
                  <div><button onClick={() => { setCountWithoutEffect(count + 1) }}>点击更新未添加依赖的属性</button><span>countWithoutEffect:{countWithoutEffect}</span></div>
                  <div><button onClick={() => { setCountObj({...countObj, count: countObj.count +1})}}>点击更新对象类型countObj+1</button><span>countObj:{ countObj.count}</span></div>
                  <button onClick={staticFn}>点击执行函数</button>
                  <button onClick={autoAdd}>开始定时器</button>
                  <button onClick={() => { history.push('/other');}}>跳转其他页面前清除定时器</button>
            </div>
      )
      
};

export default WithEffect;