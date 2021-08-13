import React, { useState } from 'react';
import useSyncCallback from './useSyncState';


const WithState = () => {
      const [count, setCount] = useState(0);
      const [count3, setCount3] = useState(0);
      const [count4, setCount4] = useState(0);
      console.log('useState');

      const syncCallback = () => {
            setCount4(count4 + 1);
            output();
        };
    
        const output = useSyncCallback(() => {
            console.log(count4);
        });
      return (<div>
            <h2 className="mt40">使用useState</h2>
            <h4 className="textLeft">解决react UI层数据更新问题</h4>
            <ol className="textLeft">
                  <li>useState会返回一对值:当前状态和一个让你更新它的函数，可以通过数组解构的方式获得并赋值给自定义名称的变量，你可以在事件处理函数中或其他一些地方访问这个状态和调用这个函数。</li>
                  <li>特点:初始state参数只有在第一次渲染时会被用到。使用更新函数更新时进行值替换而不是值合并。可以声明多个state变量。</li>
                  <li>时间切片带来的问题及解决方案:react架构的时间切片策略导致修改值后无法即时获得最新快照。</li>
                  <li>函数式更新形式：如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 setState。该函数将接收先前的 state，并返回一个更新后的值。每次 setState 内部的回调取到的 state 是最新值。</li>
            </ol>
            <p>count:{count} <button onClick={() => { setCount(c => c + 1); console.log(count);}}>count+1/函数式更新打印输出慢一步</button></p>
            <p>count:{count3} <button onClick={() => { setCount3(count3 + 1);console.log(count3);}}>count+1/由于时间切片，打印输出慢一步</button></p>
            <p>count:{count4} <button onClick={syncCallback}>count+1/使用syncCallback实时打印输出</button></p>
      </div>)
};

export default WithState;