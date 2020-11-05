import React from "react"



const Form = ({text,setText,todos,setTodos,status,setStatus}) => {
    
    const inputTextHandler = (e) => { setText(e.target.value) }
    
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: text, completed: false, id: Math.ceil(Math.random() * 1000) }]);
        setText("")
    }
    const chooseSelected = (e) => {

        setStatus(e.target.value)

    }
    return (
        <form>
            <input type="text"
                className="todo-input"
                value={text}
                onChange={inputTextHandler}
            />
            <button className="todo-button"
                type="submit"
                onClick={submitTodoHandler}
            >
                
                <i className="fas fa-list-alt"></i>
            </button>
            <div className="select">
                <select onChange={chooseSelected} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}
export default Form;