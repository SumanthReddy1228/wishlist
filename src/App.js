import './App.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onToInputChange=(e)=>{
    setTodo(e.target.value);
  }

  const addTodo=(e)=>{
    e.preventDefault();
    setTodos([...todos, {id: uuid(), todo: todo,isCompleted:false}]);
    setTodo("");
  }

  const onTodoCheckChange=(id)=>{
    const updatedTodos=todos.map((item)=>{
      if(item.id===id){
        return {...item, isCompleted: !item.isCompleted};
      }
      return item;
    });
    setTodos(updatedTodos);
  }

  const deleteTodo=(id)=>{
    const updateTodos=todos.filter(item=>item.id!==id);
    setTodos(updateTodos);
  }

  return (
    <>
    <div>
      <h1>Wishlist Application</h1>
      <input type="text" value={todo} onChange={onToInputChange} placeholder="Add item to wishlist" />
      <button onClick={addTodo}>Add</button>
      </div>
      <div>
        <h2>Your Wishlist:</h2>
          {todos?.length>0 && todos.map((item)=>(
            <div key={item.id}>
            <label>
              <input type='checkbox' onClick={()=>onTodoCheckChange(item.id)}/>
              <span>{item.todo}</span>
              <button onClick={()=>deleteTodo(item.id)}>Delete</button>
            </label>
            </div>
          ))}
      </div>
      
    </>
  );
}

export default App;
