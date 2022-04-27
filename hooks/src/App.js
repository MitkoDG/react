import { useEffect, useState } from 'react';
import './App.css';
import CharacterList from './components/CharacterList'

function App() {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setName('Mitko');
      }, 1500);
    }, []);

    return (
      <div className="App">
        <h2>{!name ? 'Loading...' : name}</h2>
        <h3>{count}</h3>
        <button onClick={() => setCount(x => x + 1)}>+</button>
        <CharacterList />
      </div>
    );
  }

export default App;
