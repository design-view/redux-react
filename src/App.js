import './App.css';
import CounterContainer from './components/CounterContainer';
import TodoContainer from './components/TodosContainer';


function App() {
  return (
    <div className="App">
      <CounterContainer/>
      <TodoContainer />
    </div>
  );
}

export default App;
