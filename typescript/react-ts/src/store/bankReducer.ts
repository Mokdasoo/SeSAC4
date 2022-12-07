const DEPOSIT = 'DEPOSIT' as const;
const WITHDRAWAL = 'WITHDRAWAL' as const;

type bankState = {
  cash: number;
  isError: boolean;
}
const initialState : bankState = {
  cash: 0,
  isError: false
}

export const deposit = (money: number) => ({
  type: DEPOSIT,
  payload: money
});

export const withdrawal = (money: number) => ({
  type: WITHDRAWAL,
  payload: money
});

type bankAction = ReturnType<typeof deposit> | ReturnType<typeof withdrawal>


const bankReducer = (state : bankState = initialState, action: bankAction) : bankState => {

  switch (action.type) {
    case DEPOSIT: 
      return {cash: state.cash + action.payload, isError: false};
    case WITHDRAWAL:
      if(state.cash < action.payload){
        return{cash: state.cash, isError:true};
      }
      return {cash: state.cash - action.payload, isError: false};
    default:
      return state;
  }
}

export default bankReducer;