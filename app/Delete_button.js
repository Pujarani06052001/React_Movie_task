const Delete=(props)=>{
    return(
        <div className="a">
            <button onClick={()=>{props.onDelete()}}><img src="fluent_delete-32-regular.png"/></button>
        </div>
       
    )

};
export default Delete;
