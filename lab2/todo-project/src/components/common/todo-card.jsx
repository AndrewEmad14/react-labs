import AVILABLE_STATUS from "../../assets/enums";
const TodoCard = ({id,title,status,handleDelete,handleDone})=>{

    const triggerDelete = ()=>handleDelete(id);
    const triggerDone = ()=>handleDone(id)
    return(
        <div className="flex flex-col">
            <span>{title}</span>
            {status=AVILABLE_STATUS.PENDING?<button onClick={triggerDone}>done</button> : <span>Done</span> }
            <button onClick={triggerDelete}>Delete</button>
        </div>
    )
}


export default TodoCard;