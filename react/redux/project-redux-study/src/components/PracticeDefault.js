
import { useSelector, useDispatch} from 'react-redux';
import {useRef} from 'react';


function PracticeDefault() {
    const bank = useSelector((state) => state.bank);
    return (
      <div style={{textAlign: 'center'}}>
        <h1>코딩온 은행</h1>
        <h3>잔액 : {bank.cash}원</h3>
        <Button />
      </div>
    );
  }

  const Button = () => {
    const ref = useRef();
    const dispatch = useDispatch();
    const bank = useSelector((state) => state.bank);
    return (
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems : 'center'}}>
        <input ref={ref} type="number" min={1} style={{width:'20rem'}}/>
        {bank.isError && <p style={{color: 'red'}}>출금 잔액 부족</p>}
        <div>
            <button type='button' onClick={() => {dispatch({type: 'DEPOSIT', cash: ref.current.value})}}>입금</button>
            <button type='button' onClick={() => {dispatch({type: 'WITHDRAWAL', cash: ref.current.value})}}>출금</button>
        </div>
        
      </div>
    )
  }

  export default PracticeDefault;