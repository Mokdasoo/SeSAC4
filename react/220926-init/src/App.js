import React, {useState} from 'react';
import Sample from './Sample';
import EX58 from './EX58';
import EX59 from './EX59';
import EX61 from './EX61';

function App() {
  const [list, setList] = useState(['s', 'e', 's', 'a','c']);
  
  function addElement() {
    
    console.log([...list, 's']);
    setList([...list, 's']);
  }
  
  return(
    <div>
      <ul>
        {list.map((name, i) => {
          return <li key={i}>{name}</li>
        })}
      </ul>
      <button onClick={addElement}>추가</button>
      <Sample />
      <EX58 />
      {/* <EX59 /> */}
      <EX61 />
    </div>
  );
}

export default App;
