import React, { memo, forwardRef, useImperativeHandle, useState} from 'react';

const imperativeHandleChild = memo(forwardRef((props, ref) => {
      // 接收ref新属性
      const [count, setCount] = useState(1);
      console.log('imperativeHandleChild');

      const add = () => {
            setCount(count+1);
      };

      useImperativeHandle(ref, () => ({
            add, 
      }));

      return (<div ref={ref}>
            <p>我是子组件（事件函数我自己定义，我通过useImperativeHandle也暴露给了父组件）<button onClick={ add}>在我这里点击+1</button>count:{ count}</p>
      </div>);
 }));

export default imperativeHandleChild;