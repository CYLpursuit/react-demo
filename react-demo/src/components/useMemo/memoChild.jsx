import React, {memo} from 'react';

const MemoChild = memo((props) => {
      console.log('MemoChild', props);
      return (<div>
            <p>我是静态内容子组件</p>
      </div>)
 });

export default MemoChild;