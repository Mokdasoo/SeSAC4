
import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import PracticeDefault from './components/PracticeDefault';



const App = () => {
  const counter = useSelector((state) => state.counter);
  return (
      <div id='app'>
        <h1>number : {counter.number}</h1>
        <Box1/>
        <PracticeDefault/>
      </div>
    
  );
}



const Box1 = () =>{
  const counter = useSelector((state) => state.counter);
  console.log('Box1');
  return (
    <div>
      <h2>Box1 컴포넌트 number : {counter.number}</h2>
      <Box2  />
    </div>
  );
};
const Box2 = () =>{
  const counter = useSelector((state) => state.counter);
  console.log('Box2');
  return (
    <div>
      <h3>Box2 컴포넌트 number : {counter.number}</h3>
      <Box3/>
    </div>
  );
};
const Box3 = () =>{
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log('Box3');
  return (
    <div>
      <h4>Box3 컴포넌트 number : {counter.number}</h4>
      <input type="button" value="+" onClick={()=>{dispatch({type: 'INCREASE'})}} />
      <input type="button" value="-" onClick={()=>{dispatch({type: 'DECREASE'})}} />
    </div>
  );
};


export default App;
