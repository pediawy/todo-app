import React,{useState,useEffect} from "react"
import Form from "./Form"
import ToDoList from "./ToDoList"
import "./App.css"

const App = () => {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState("all")
    const [filterTodos,setFilterTodos]=useState([])
    
    useEffect(() => {
        const getLocalTodo = () => {
            if (localStorage.getItem("todos") === null) {
                localStorage.setItem("todos",JSON.stringify([]))
            } else {
                const todoLocal = JSON.parse(localStorage.getItem("todos"))
                setTodos(todoLocal)
            }
        }
        getLocalTodo()
    },[])
    useEffect(() => {
        const showContent = () => {
            switch (status) {
                case "completed":
                    setFilterTodos(todos.filter(todo => todo.completed === true))
                    break;
                case "uncompleted":
                    setFilterTodos(todos.filter(todo => todo.completed === false));
                    break;
                default:
                    setFilterTodos(todos)
                    break;
            }
        }
        const saveLocalTodo = () => {
            localStorage.setItem("todos",JSON.stringify(todos))
        }
        showContent()
        saveLocalTodo()
    },[todos,status])
 

    




    return (
        <div className="App">
            <header>
                <h1>To do list</h1>
            </header>
            <Form text={text} setText={setText} todos={todos} setTodos={setTodos} status={status} setStatus={setStatus}/>
            <ToDoList filterTodos={filterTodos} todos={todos} setTodos={setTodos}/>
        </div>
        )
}
export default App