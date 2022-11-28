const bankReducer = (state = {cash: 0, isError: false}, action) => {
    if(action.type === 'DEPOSIT'){
      return {cash: state.cash + +action.cash, isError: false};
    } else if(action.type === 'WITHDRAWAL'){
      if(state.cash < action.cash){
        return{cash: state.cash, isError:true};
      }
      return {cash: state.cash - +action.cash, isError: false};
    }
    return state;
  }

export default bankReducer;