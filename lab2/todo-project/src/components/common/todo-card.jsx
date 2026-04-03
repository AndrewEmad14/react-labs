import AVILABLE_STATUS from "../../assets/enums";

const TodoCard = ({ id, title, status, handleDelete, handleDone }) => {
    const triggerDelete = () => handleDelete(id);
    const triggerDone = () => handleDone(id);
    const isPending = status === AVILABLE_STATUS.PENDING;

    return (
        <div className="flex flex-row items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm w-72">
            <span className="text-gray-800 font-medium truncate flex-1">{title}</span>
            <div className="flex flex-row items-center gap-2 ml-3">
                {isPending ? (
                    <button
                        onClick={triggerDone}
                        className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors">
                        Done
                    </button>
                ) : (
                    <span className="text-green-500 text-sm font-medium px-3 py-1.5">
                        ✓ Done
                    </span>
                )}
                <button
                    onClick={triggerDelete}
                    className="bg-red-100 hover:bg-red-200 text-red-600 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors">
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TodoCard;