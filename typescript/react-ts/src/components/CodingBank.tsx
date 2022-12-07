import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/rootReducer";
import { deposit, withdrawal } from "../store/bankReducer";
import { useRef } from 'react';



const CodingBank = () => {
    const bank = useSelector((state: RootState) => (state.bank));
    return (
      <div style={{textAlign: 'center'}}>
        <h1>코딩온 은행</h1>
        <h3>잔액 : {bank.cash}원</h3>
        <Button />
      </div>
    );
}

const Button = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const bank = useSelector((state: RootState) => state.bank);
    return (
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems : 'center'}}>
        <input ref={inputRef} type="number" min={1} style={{width:'20rem'}}/>
        {bank.isError && <p style={{color: 'red'}}>출금 잔액 부족</p>}
        <div>
            <button type='button' onClick={() => {
                if(inputRef.current){
                    dispatch(deposit(+inputRef.current.value));
                }
            }}>입금</button>
            <button type='button' onClick={() => {
                if(inputRef.current){
                    dispatch(withdrawal(+inputRef.current.value))
                }
            }}>출금</button>
        </div>
        
      </div>
    )
  }

export default CodingBank;