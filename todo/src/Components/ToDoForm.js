import React from "react";

export default function ToDoForm(props) {
    return (
        <div>
            <input 
                value={props.value} 
                type="text"
                onChange={props.onChange}
            />
            <button onClick={props.addNewTodo}>Submit</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )      
};

