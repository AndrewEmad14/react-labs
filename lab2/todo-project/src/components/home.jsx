 import TodoAdd from "./common/todo-add"
import TodoCard from "./common/todo-card"
import AVILABLE_STATUS from "../assets/enums";
import Todo from "../assets/todo";
 const Home =()=>{
    const handleAdd =(id)=>{

    }
    const handleDelete = (id)=>{

    }
    const handleDone = (id)=>{

    }
    return(
        <div className="flex flex-row">
            <TodoAdd handleAdd={handleAdd}/>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    {Todo.map((todo)=>{
                        <TodoCard key={todo.id} title={todo.title} status={todo.status} handleDelete={}/>
                    })}
                </div>
                 <div className="flex flex-row">
                    
                </div>
            </div>
        </div>

    )
 }