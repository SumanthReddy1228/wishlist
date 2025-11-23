import './App.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onTodoInputChange=(e)=>{
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
      <div className="app-container">
        <header className="app-header">
          <h1>Wishlist Application</h1>
        </header>

        <div className="input-group">
          <input
            type="text"
            value={todo}
            onChange={onTodoInputChange}
            placeholder="Add item to wishlist"
            aria-label="Add item to wishlist"
          />
          <button className="add-button" onClick={addTodo}>Add</button>
        </div>

        <section className="wishlist">
          <h2>Your Wishlist:</h2>
          {todos?.length > 0 && todos.map((item) => (
            <div key={item.id} className={`todo-item ${item.isCompleted ? 'completed' : ''}`}>
              <label>
                <input
                  type='checkbox'
                  checked={item.isCompleted}
                  onClick={() => onTodoCheckChange(item.id)}
                />
                <span className="todo-text">{item.todo}</span>
              </label>
              <button className="delete-button" onClick={() => deleteTodo(item.id)}>Delete</button>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
