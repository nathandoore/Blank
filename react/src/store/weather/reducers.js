import ACTIONS from './types';

const initialState = [];
/**
 * @description Reducer hook used to turn dispatch type into an object state
 * @param {*} state
 * @param {*} action
 * @return {object}
 */
export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ITEM:
      return {...state, ...action.payload};
    case ACTIONS.LIST:
      return {...state, ...action.payload};
    case ACTIONS.CLEAR_ALL:
      return state = initialState;
    default:
      return state;
  }
}
