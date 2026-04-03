import TodoAdd from "./common/todo-add"
import TodoCard from "./common/todo-card"
import AVILABLE_STATUS from "../assets/enums";
import Todo from "../assets/todo";
import { useState } from "react";

const Home = () => {
    const [todoCopy, setTodo] = useState(Todo)
    const todoDone = todoCopy.filter((todo) => todo.status === AVILABLE_STATUS.FINISHED)
    const todoPending=todoCopy.filter((todo) => todo.status === AVILABLE_STATUS.PENDING)

    const handleAdd = (todo) => setTodo([...todoCopy, todo])
    
    const handleDelete = (id) => setTodo(todoCopy.filter((todo) => todo.id !== id));
    
    const handleDone = (id) => setTodo(todoCopy.map((todo) => todo.id === id ? { ...todo, status: AVILABLE_STATUS.FINISHED } : todo));
    
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">My Tasks</h1>
            <TodoAdd lastId={todoCopy.length ? todoCopy.findLast(() => true).id : 0} handleAdd={handleAdd} />
            <div className="flex flex-row gap-8 mt-8">
                <div className="flex flex-col gap-3 flex-1">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">
                        Pending — {todoPending.length}
                    </h3>
                    {todoPending.map((todo) => (
                        <TodoCard key={todo.id} id={todo.id} title={todo.title} status={todo.status} handleDone={handleDone} handleDelete={handleDelete} />
                    ))}
                    {todoPending.length === 0 && (
                        <p className="text-gray-300 text-sm">No pending tasks</p>
                    )}
                </div>
                <div className="flex flex-col gap-3 flex-1">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">
                        Done — {todoDone.length}
                    </h3>
                    {todoDone.map((todo) => (
                        <TodoCard key={todo.id} id={todo.id} title={todo.title} status={todo.status} handleDone={handleDone} handleAdd={handleAdd} handleDelete={handleDelete} />
                    ))}
                    {todoDone.length === 0 && (
                        <p className="text-gray-300 text-sm">No completed tasks</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;