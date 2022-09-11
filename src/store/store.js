import {applyMiddleware , legacy_createStore as createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import {CHANGE_INPUT_VALUE , ADD_NEW_TODO} from "./consts";




const initialStore = {
    inputValue: "",
    todos: []
}
const rootReducer = (state = initialStore, action) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.payload,
            }
            case ADD_NEW_TODO:
            return {
                ...state,
                todos: [...state.todos , action.payload],
            }
        default:
            return state
    }
}



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const changeInputValueAction = (payload) => ({ type: CHANGE_INPUT_VALUE, payload});
export const addNewTodoAction = (payload) => ({ type: ADD_NEW_TODO, payload});

export const getNewTodoAndClearInputThunk = (payload) => (dispatch) => {
    dispatch(addNewTodoAction(payload));
    dispatch(changeInputValueAction(""));



};
