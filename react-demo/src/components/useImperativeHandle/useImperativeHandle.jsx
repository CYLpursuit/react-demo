import React, { useRef, useState, createRef } from 'react';
import RefChild from '../useImperativeHandle/refChild';

const WithImperativeHandle = () => {
      const [count, setCount] = useState(0);
      const countRef = useRef(0);
      const countCreate = createRef(0);
      const cRef = useRef();
      // 加10
      const addParent = () => {
            cRef.current.add();
      };
      return (<div>
            <h2 className="mt40">使用useRef,createRef,forwardRef,useImperativeHandle</h2>
            <h4 className="textLeft">解决组件间引用，函数组件没有实例，只可以引用DOM元素</h4>
            <ol className="textLeft">
                  <li>useRef:创建ref, 每次都会返回相同的引用。useRef 返回一个可变的 ref 对象，可以反应变量实时的状态值而非某一时刻的快照，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内持续存在。</li>
                  <li>createRef:创建ref, 每次渲染都会返回一个新的引用。</li>
                  <li>forwardRef:refs转发。接收父组件的ref并向下传递，作为其第二个参数，返回一个组件。可以将父组件的ref绑定到子组件自身的节点上。</li>
                  <li>useImperativeHandle:让你在使用 ref 时自定义暴露给父组件的实例值。应当与 forwardRef 一起使用。</li>
            </ol>
            {/* 仅使用state保存的是某一时刻的快照 */}
            <p>点击了{count}次<button onClick={() => { setCount(count + 1) }}>点击</button><button onClick={() => { setTimeout(() => { console.log(count) }, 3000) }}>延时确认当前count</button></p>
            {/* 使用ref保存的是最新的值 */}
            <p><button onClick={() => { countRef.current = countRef.current+1;console.log(countRef.current); }}>点击</button><button onClick={() => { setTimeout(() => { console.log(countRef.current) }, 3000) }}>延时确认当前countRef</button></p>
            <p><button onClick={() => { countCreate.current = countCreate.current + 1; console.log(countCreate.current); }}>点击</button><button onClick={() => { setTimeout(() => { console.log(countCreate.current) }, 3000) }}>延时确认当前countCreateRef</button></p>
            {/* 使用子组件暴漏的函数 */}
            <button onClick={addParent}>在父组件点击加1</button>
            {/* 子组件引用 */}
            <RefChild ref={ cRef}/>
      </div>);
 };

export default WithImperativeHandle;