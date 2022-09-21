import './App.css';
import EX543Component from './EX54-3';

function App() {
  
  const animalname = '이쁜이';
  const animal = '강아지';

  // const style = {
  //   backgroundColor: "yellow",
  //   color : "blue"
  // }
  const a = 10;
  const b = 5;
  const title = 'Hi World';
  const valid = function viewConsole(){
    console.log("콘솔 띄우기 성공!");
  }
  
  return (
    // inline style
    // <div style={{
    //   backgroundColor: "yellow",
    //   color : "blue"
    // }}>
    // <div className="test" style={style}>
    //     {name}
    //     { flag ? <h1>True</h1> : <h2>False</h2>}
    //     {/* { flag && <h1>True</h1>}  */}
    //     {/* 참일때만 실행하고 싶으면 */}
    // </div>

    <div>이것은 div입니다
      <h3>이것은 div 안에 있는 h3태그 입니다</h3>
      <h2>제 반려 동물의 이름은 <u>{animalname}</u>입니다.<br></br>
      <u>{animalname}</u>는 <u>{animal}</u>입니다.</h2>
      {3+5 === 8 ? <h4>정답입니다!</h4> : <h4>오답입니다!</h4>}
      {a>b && <h4>a가 b보다 큽니다</h4>}
      
      <div className='test'>
        {title}
      </div>
      <div style={{textAlign : 'center'}}>
        <label htmlFor="inputid">아이디 : </label> <input className='input' type='text' id='inputid'></input><br></br>
        <label htmlFor="inputpw">비밀번호 : </label> <input className='input' type='password' id='inputpw'></input>
      </div>

      <div style={{width: "100%", height: '50vh', marginTop: '20px'}}>
        <div className='rainbow red'></div>
        <div className='rainbow orange'></div>
        <div className='rainbow yellow'></div>
        <div className='rainbow green'></div>
        <div className='rainbow blue'></div>
        <div className='rainbow navy'></div>
        <div className='rainbow purple'></div>
        
      </div>
      <div>
        <div className="c c1">
            <div className="w_eye">
                <div className="b_eye"></div>
            </div>

        </div>
        
        
        <div className="c c2">
            <div className="c c3">
                
                <div className="c c4"></div>
                <img className="grass" src = "/images/grass.png" alt="잔디"></img>
                <div className="c c5"></div>
            </div>
        </div>
      </div>
      
      <EX543Component text="App 컴포넌트에서 넘겨준 text props입니다." valid={valid} />

    </div>
    
    
  );
}

export default App;
