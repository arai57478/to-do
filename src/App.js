import React from 'react';
import './App.css';
import Input from './components/input';
import Todoitem from "./components/Todoitem";
import Header from './components/Header'
import { useSelector } from 'react-redux';
import {selectTodolist} from './features/todosection'

function App() {
  const todolist=useSelector(selectTodolist)
  return (
   
    <div className="App">
    <Header />
    <div className="app_container">
      <div className="app_todocontainer">
      
        { todolist.map(item =>(
          <Todoitem 
            name={item.item}
            done={item.done}
            id={item.id}
          />
        ))}
      </div>
    
     <Input />
    </div>
      </div>
  );
}

export default App;
