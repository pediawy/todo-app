import React from "react"


const TodoList = ({ todos,setTodos,filterTodos}) => {


    const deleteTodo = (todo) =>{setTodos(todos.filter(el=>el.id !==todo.id))}

    const completedTodo = (todo) => {
        setTodos(todos.map(el => {
            if (el.id === todo.id) {
                return {...el,completed:!el.completed}
            }
            return el
        }))
    }



    const renderList = filterTodos.map(todo => {
        if (!todo.text) { return null }
        
        return (
            <div className="todo" key={todo.id}>
                <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                    {todo.text}
                    
                </li>
                <button className="complete-btn"
                    onClick={() => {completedTodo(todo)}}
                >
                    <i className="fas fa-check"></i>
                </button>
                <button className="trash-btn" onClick={()=>{deleteTodo(todo)}} >
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        )
    })



    return (
        <div className="todo-container">
            <ul className="todo-list">
               {renderList}
            </ul>
        </div>
    )
}
export default TodoList;