import React, { useState } from 'react';
import './App.css';
import CodingBank from './components/CodingBank';

type AppProps = {
  name: string;
  age?: number;
}

function App(props:AppProps) {
  // const [list, setList] = useState<number[]>([]);

  return (
    <div className="App">
      <CodingBank />
    </div>
  );
}

export default App;
