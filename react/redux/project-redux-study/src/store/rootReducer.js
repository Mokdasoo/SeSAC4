import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import bankReducer from './bankReducer';

const rootReducer = combineReducers({
    counter : counterReducer,
    bank : bankReducer
});

export default rootReducer;