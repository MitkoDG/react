import { useEffect, useState, useRef } from 'react';
import './App.css';
import CharacterList from './components/CharacterList'
import { Counter } from './components/Reducer';

function App() {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
    const enteredInputName = useRef()

    useEffect(() => {
      setTimeout(() => {
        setName('Mitko');
      }, 1500);
    }, []);

    function changeNameFunc(name) {
      const newName = enteredInputName.current.value
      setName(newName)
    }

    return (
      <div className="App">
        <input placeholder="name" ref={enteredInputName}/>
        <button onClick={changeNameFunc}> Change the name</button>
        <h2>{!name ? 'Loading...' : name}</h2>
        <Counter />
        <h3>{count}</h3>
        <button onClick={() => setCount(x => x + 1)}>+</button>
        <CharacterList />
        
      </div>
    );
    
  }

export default App;
