import React, {useState} from 'react'

const TodoList = () => {
    let [todos, setTodos] = useState(["sample task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
       setTodos([...todos,newTodo]);
       setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }
  return (
    <div>
        <input placeholder='add a task' value={newTodo} onChange={updateTodoValue}></input>
        <br /><br />
        <button onClick={addNewTask}>Add Task</button>
        <br /><br />
        <br /><br />
        

        <hr /><hr />
        <br /><br />
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
