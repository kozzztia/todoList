import React from 'react';
import {changeInputValueAction , getNewTodoAndClearInputThunk} from "../store/store";
import {useDispatch, useSelector} from "react-redux";
import {randomColor} from "../support";
import styles from "./InputForm.module.scss"


const InputForm = () => {
    const inputValue = useSelector(state => state.inputValue);
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    return (
        <form
            className ={styles.form}
              onSubmit={(e)=>{
                  e.preventDefault()
                  dispatch(getNewTodoAndClearInputThunk(
                      {
                          name: inputValue,
                          id: todos.length +1,
                          backGroundColor : randomColor(),
                          }
                  ))
              }}
        >
            <input type="text"
                   onChange={(e) => dispatch(changeInputValueAction(e.target.value))}
                   value={inputValue}
            />
            <button disabled={!inputValue} className={styles.btn}>
                <img src="https://gogeticon.net/files/3132494/37fc1bfccf06a892b2fd6a934b4f529a.png" alt="plus"/>
            </button>
        </form>
    );
}

export default InputForm;
