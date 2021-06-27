import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todolist:[]
}

const todosection = createSlice({
    name: "todo",
    initialState,
    reducers: {
       saveTodo:(state,action)=>{
           state.todolist.push(action.payload )
       },
       setCheck:(state,action)=>{
           state.todolist.map(item=>{
               if(action.payload===item.id){
                   if(item.done===true){
                       item.done=false
                   }else
                   item.done=true
               }
           })
       }
    }
});

export const {saveTodo,setCheck} = todosection.actions
export const selectTodolist =state=>state.todo.todolist
export default todosection.reducer