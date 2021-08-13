import React, {useState, useEffect, useRef, useMemo, useCallback, memo} from 'react';
import Child from './child';

const Parent = memo(() => {
      console.log('parent 渲染了');
      const [count, setCount] = useState(0);
      const [time, setTime] = useState({now:Date.now()});
      // 引用
      const cRef = useRef();
      // 计算属性
      const doubleCount = useMemo(() => count * 2, [count]);

      // 添加count依赖，只有count变化时才会执行
      useEffect(() => {
            console.log('count 变了啊');
            return () => {}
      }, [count]);

      // 添加time依赖，只有time变化时才会执行
      useEffect(() => {
            console.log('time 变了啊');
            return () => {}
      }, [time.now]);

      // 函数缓存再传递给child组件，parent组件更新不会触发子组件更新
      const add = useCallback(() => {
            setCount(count => count + 1);
      }, []);

      return (<div>
            <p>我是父组件 count:{count}, double count: {doubleCount} <button onClick={add}>+1</button><button onClick={() => { cRef.current.fn() }}>点击调用子组件方法看看</button></p>
            <p>现在是北京时间 time:{time.now} <button onClick={() => { setTime({now:Date.now()});}}>更新时间</button></p>
            <Child ref={cRef} param="我是子组件点击看看" add={ add }/>
      </div>);
 });

export default Parent;