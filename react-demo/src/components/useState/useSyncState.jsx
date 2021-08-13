import { useEffect, useState, useCallback } from 'react';

const useSyncState = (callback) => {
  // 增加一个state触发切片更新 且 默认值为false
  const [proxyState, setProxyState] = useState({ current: false });

  // useCallback避免重复init
  const Func = useCallback(() => {
      // 调用时即更改标志为true
      setProxyState({ current: true });
  }, []);

  useEffect(() => {
    // 检查Func是否被缓存
    console.log('Func change');
  }, [Func]);

  // 结束后更改标志为false
  useEffect(() => {
    if (proxyState.current === true) setProxyState({ current: false });
  }, [proxyState]);

   useEffect(() => {
    // 每次均执行
    proxyState.current && callback();
  });

  return Func;
};

export default useSyncState;
