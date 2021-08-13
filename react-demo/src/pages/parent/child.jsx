import React, { memo, forwardRef, useImperativeHandle, useCallback, useEffect } from 'react';

const Child = memo(forwardRef((props, ref) => {
      console.log('我使用了memo缓存组件,只有props有属性变化时我才会再次渲染');
      // 解构props
      const { param, add } = props;

      // 函数缓存，避免自组见刷新时重复init
      const fn = useCallback(() => {
            // 业务逻辑
            alert('我是子组件的方法');
      }, []);

      useEffect(() => {
            console.log('我添加了fn依赖，确认其用了useCallback只init了一次');
      }, [fn]);
      
      // 需要暴露给父组件的方法
      useImperativeHandle(ref, () => ({
            fn,
      }));
      
      return (<div><button onClick={fn}>{param}</button><button onClick={ add }>点我也可以更新count</button></div>);
 }));

export default Child;