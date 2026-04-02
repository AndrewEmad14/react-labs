import UserCard from '../user-card';
import SearchBar from '../search-bar';
import user from '../../assets/data/user';
import { useState } from 'react';
const Home = () => {
    const [query,setQuery] = useState('');
    const handleQuery= (query)=> setQuery(query)
    console.log(query);
    return (
        <div className='flex flex-col w-full'>
            <SearchBar handleQuery={handleQuery}/>
            <div className='flex flex-row flex-wrap gap-2 justify-center'>
           
                {user.map(user => {
                    if(query){
                        if(user.name.toLowerCase().match(query.toLowerCase()))return (<UserCard key={user.email} {...user}/>);
                    }else{

                        return (<UserCard key={user.email} {...user}/>);
                    }
                
                })}
             </div>
        </div>
        
    );
}

export default Home;