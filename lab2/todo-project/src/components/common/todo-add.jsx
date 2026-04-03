import { useState } from "react"
import AVILABLE_STATUS from "../../assets/enums";
const TodoAdd = ({ lastId, handleAdd }) => {
    const [todo, setTodo] = useState({})

    const handleChange = (e) => setTodo({ ...todo, id: lastId + 1, title: e.target.value, status: AVILABLE_STATUS.PENDING });

    const handleSubmit = () => {
        if (!todo.title) return  // guard against empty submit
        handleAdd(todo)
        setTodo({})
    }

    return (
        <div className="flex flex-row items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm w-72">
            <input
                className="flex-1 text-gray-800 placeholder-gray-400 outline-none text-sm"
                type="text"
                placeholder="Add a new task..."
                value={todo.title || ''}
                onChange={handleChange}
            />
            <button
                onClick={handleSubmit}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-1.5 rounded-lg transition-colors text-lg">
                +
            </button>
        </div>
    )
}

export default TodoAdd