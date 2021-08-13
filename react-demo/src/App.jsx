import logo from './logo.svg';
import './index.css';
import WithState from './components/useState/useState';
import WithMemo from './components/useMemo/useMemo';
import WithContext from './components/useContext/useContext';
import WithCallback from './components/useCallback/useCallback';
import WithReducer from './components/useReducer/useReducer';
import WithEffect from './components/useEffect/useEffect';
import WithImperativeHandle from './components/useImperativeHandle/useImperativeHandle';
import Other from './components/other/other';

console.log('App');
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* React Hooks最佳实战 */}
        </p>
      </header>
      <h2>什么是Hook(React 16.8)</h2>
      <p className="textLeft">Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。函数式组件可以使用Hooks。</p>
      <a href="https://reactjs.bootcss.com/docs/hooks-reference.html#functional-updates">参考链接</a><br/>
      <a href="https://github.com/CYLpursuit/react-demo">仓库地址</a>
      <WithState/>
      <WithEffect/>
      <WithMemo />
      <WithCallback />
      <WithImperativeHandle />
      <WithReducer />
      <WithContext />
      <Other/>
    </div>
  );
}

export default App;
