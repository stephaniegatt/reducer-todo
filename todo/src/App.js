import React, { useReducer, useState } from 'react';
import './App.css';
import { reducer, initialState } from './reducers/reducer';
import ToDoForm from './Components/ToDoForm';

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState();
  const onChange = e => {
    setNewTodo(e.target.value)
  }
  



  return (
    <div>
      <ToDoForm value={newTodo} onChange={onChange} addNewTodo={() =>
        dispatch({ type: "ADD_TODO", payload: newTodo }) 
      } clearCompleted={() => dispatch({ type: "CLEAR_COMPLETED" })} />
      {todos.map(todo => {
        return (
          <p key={todo.id} 
            onClick={() => dispatch({ type: "TOGGLE_COMPLETED", payload: todo.id }) }
            style={todo.completed ? { textDecoration: 'line-through' } : null}
          >{todo.item}</p>
        ); // dont forget to add key
      })}
    </div>
  );
}

export default App;
