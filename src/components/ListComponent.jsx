import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from "./list.module.scss"


const ListComponent = () => {
    const todos = useSelector(state => state.todos);
    return (
        <ul className={styles.list}>
            {
                todos.map(todo=> <li
                    key={todo.id}
                    className={styles.element}
                    style={{backgroundColor:`${todo.backGroundColor}`}}>№{todo.id} : {todo.name}</li>
                )
            }
        </ul>
    );
}

export default ListComponent;
