import React from "react";
import './Todoitem.css';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from "react-redux";
import { setCheck} from '../features/todosection';
const Todoitem=({name,done,id})=>{
    const dispatch=useDispatch()
    const handleChange=()=>{
        dispatch(setCheck(id))
    }
    return (
        <div className='todoitem'>
          <Checkbox
        checked={done}
        color="primary"
        onChange={handleChange}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
          <p className={done && "todoitem--done"}>{name}</p>
        </div>
    )
}
export default Todoitem