import React from 'react';
import '../base.css';

const Other = () => {
      console.log('other');
      return (<div>
            <h2 className="mt40">其他的变量使用方法</h2>
            <h4 className="textLeft">解决更多场景的变量使用</h4>
            <ol className="textLeft">
                  <li>函数组件外定义的变量</li>
                  <li>使用全局Global定义的变量</li>
                  <li>对象函数的使用</li>
                  <li>白名单路由</li>
            </ol>
      </div>);
};


export default Other;