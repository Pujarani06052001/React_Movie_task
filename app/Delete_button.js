const Delete=(props)=>{
    return(
        <div className="a">
            <img onClick={()=>{props.onDelete()}} src="fluent_delete-32-regular.png"/>
        </div>
       
    )

};
export default Delete;
