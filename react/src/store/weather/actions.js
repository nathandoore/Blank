import {store} from '../store';

/**
 * @description manages the selected item's state and actions it here
 */
export const setItemAction = (item) => {
       store.dispatch({type: 'ITEM', payload: {item: item}});
};

/**
 * @description manages the list
 */
 export const setList = (list) => {
       store.dispatch({type: 'LIST', payload: {list: list}});
};
