import React from 'react';
import {useSelector} from "react-redux";
import styles from "./list.module.scss"
import Item from "./Item";


const ListComponent = () => {
    const todos = useSelector(state => state.todos);
    return (
        <ul className={styles.list}>
            {
                todos.map(todo=> <Item
                    key={todo.id}
                    classNameBtn={styles.btn}
                    className={styles.element}
                    classNameDone={styles.doneElement}
                    id={todo.id}
                    name ={todo.name}
                    style={{backgroundColor:`${todo.backGroundColor}`}}/>
                )
            }
        </ul>
    );
}

export default ListComponent;
