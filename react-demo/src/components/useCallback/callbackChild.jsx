import React, { memo} from 'react';

const CallbackChild = memo(({ value, clickHandle }) => {
      console.log('CallbackChild');
      return <div>
                  <div onClick={clickHandle}>
                  我是子组件(事件函数通过父组件传递)<span>点击+1</span>: {value}
                  </div>
      </div>
});

export default CallbackChild;