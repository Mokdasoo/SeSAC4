const counterReducer = (state, action) => {
    if(action.type === 'INCREASE'){
      return {number: state.number + 1};
    } else if(action.type === 'DECREASE'){
      return {number: state.number - 1};
    }
    return { number: 1};
  }

export default counterReducer;