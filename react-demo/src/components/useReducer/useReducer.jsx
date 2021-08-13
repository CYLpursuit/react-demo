import React, { useReducer } from "react";
import '../base.css';

const myReducer = (state, action) => {  
  switch(action.type) {    
    case('countUp'):      
    return {        
      ...state,        
      count: state.count + 1      
    }    
    default:      
    return state  
  }
}
  
function App() {  
  const [state, dispatch] = useReducer(myReducer, { count: 0 })  
  return (    
    <div className="App">
      <h2 className="mt40">使用useReducer</h2>
      <h4 className="textLeft">useState的替代方案，解决state逻辑较复杂且包含多个子值，或者下一个state依赖于之前的state等场景</h4>
      <ol className="textLeft">
        <li>能给那些会触发深更新的组件做性能优化</li>
      </ol>
      <p>count: {state.count}<button onClick={() => dispatch({ type: 'countUp' })}>点击+1</button></p>    
    </div>  
  );
}

export default App;