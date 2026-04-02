const UserCard = (props) => {
    let { image, title, name, email, phone, birthdate } = props;
    let ringColor =""
    let titleColor=""
    if (title == "Admin"){
        ringColor="ring-red-500"
        titleColor="bg-red-500"
    }else if(title == "Moderator"){
        ringColor="ring-yellow-500"
        titleColor="bg-yellow-500"
    }else{
        ringColor="ring-blue-500"
        titleColor="bg-blue-500"
    }
    return (
        <div className=" flex flex-col items-center bg-white rounded-lg shadow-md p-4 m-4 w-64 ">
            
            <img className={`rounded-full w-50 h-50 relative z-10 ring-5 ${ringColor} mb-10`} src={image} alt={name} />

            
            <h2>{name}</h2>
            <p className={`text-white ${titleColor} p-2 rounded`}>{title}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{birthdate}</p>
        </div>
    );
}

export default UserCard;