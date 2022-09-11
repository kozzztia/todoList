import React , {useState} from "react"
import {removeTodoAction} from "../store/store";
import {useDispatch} from "react-redux";


const  Item = ({id,name,style,className, classNameBtn, classNameDone}) =>{
    const dispatch = useDispatch()
        const [done , setDone] = useState(false)
    return (
        <li style={style} className={`${className} ${done&&classNameDone}`}
            onClick={(e)=>{
                setDone(prev => !prev)
            }}
        >
            <b>{id} : </b>
            {
                done?<p>done</p>:<p>{name}</p>
            }

            <button
                style={!done?{transform:"translate(1000% , 0)"}:{transform:"translate(0, 0)"}}
                className={classNameBtn}
                onClick={(e)=>{

                    e.preventDefault()
                    dispatch(removeTodoAction(id))
                    e.stopPropagation()
                }}
            >
                <p>X</p>
            </button>
        </li>
    );
}

export default Item;
