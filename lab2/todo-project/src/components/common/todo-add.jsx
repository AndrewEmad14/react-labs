import { useState } from "react"

const TodoAdd = (lastId,handleAdd)=>{
    // id,title,status
    const [todo,setTodo]=useState({id:'',title:'',status:''})
   
    const handleChange = (e)=>{
            setTodo(...todo,{id:lastId+1,title:e.target.value,status:"pending"})
            handleAdd(todo)
        }
    return(
        <div className="flex flex-col">
            <input type="text" onChange={handleChange}/>
            <button onSubmit={handleAdd}></button>
            
        </div>
    )
}

export default TodoAdd