import { useState, useReducer } from "react";

function reducer(state, action) {
    switch (action.type){
        case "INCREMENT":
            return {value: state.value + 1};
        case "DECREMENT":
            return {value: state.value - 1};
        default:
            return state;
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer,{value: 0}); //함수형 컴포넌트안에서만 작동할 수 있던 useState를 외부에서도 만질 수 있게 확장한 기능
    
    return (
        <div>
            <h1>{state.value}</h1>

            <button onClick={() => {dispatch({type: 'DECREMENT'})}}>-1</button>
            <button onClick={() => {dispatch({type: 'INCREMENT'})}}>+1</button>
        </div>
    );
}

export default Reducer;