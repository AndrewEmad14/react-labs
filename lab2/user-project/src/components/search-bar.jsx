import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
const SearchBar = ({handleQuery})=>{
    const MAX_LENGTH=100
  
    const [query,setQuery] = useState('');
    const handleSubmit = (e)=>{
        setQuery(e.target.value);
        handleQuery(e.target.value)
    }
    const handleReset = ()=>{
        setQuery('');
        handleQuery('')
    }
    return(
        <div className="flex flex-row w-full px-50 py-20">
            <input className="rounded flex-1 border border-orange-500 
            focus:outline-none focus:border-yellow-300" type="search" value={query} maxLength={MAX_LENGTH} onChange={handleSubmit} />

            {query?<button onClick={handleReset} className="p-5 mx-5 rounded-lg bg-red-500">reset</button> :<FontAwesomeIcon className="bg-orange-400 text-white p-5  mx-5 rounded-lg" icon={faSearch}/>}    


        </div>
    )
}



export default SearchBar