import { combineReducers } from 'redux';

function creteReducers(store, initialValue = {}) {
  return (state = initialValue, action) => {
    switch (action.type) {
      case `${store}UPDATE`:
        return { ...state, ...action.value };
      default: return state;
    }
  };
}

export default combineReducers({
  hooksExample: creteReducers('hooksExample', { words: 'hello world' }),
  classExample: creteReducers('classExample', { words: 'hello world' }),
});
