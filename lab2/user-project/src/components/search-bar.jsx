import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
const SearchBar = ({handleQuery})=>{
    const MAX_LENGTH=100

    const handleSubmit = (e)=>{
        handleQuery(e.target.value)
    }
    return(
        <div className="flex flex-row w-full px-50 py-20">
            <input className="rounded flex-1 border border-orange-500 
            focus:outline-none focus:border-yellow-300" type="search" maxLength={MAX_LENGTH} onChange={handleSubmit} />
            <button type="submit" onClick={handleSubmit}>
                <FontAwesomeIcon className="bg-orange-400 text-white p-5  mx-5 rounded-lg" icon={faSearch}/>
            </button>


        </div>
    )
}



export default SearchBar