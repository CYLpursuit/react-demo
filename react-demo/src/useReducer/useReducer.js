import React, { useReducer } from "react";
import ReactDOM from "react-dom";

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
      <button onClick={() => dispatch({ type: 'countUp' })}>        +1      </button>      
      <p>Count: {state.count}</p>    
    </div>  
  );
}

export default App;