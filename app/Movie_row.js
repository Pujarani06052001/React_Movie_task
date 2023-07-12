import App from './page.js';
import LikeButton from './Like_Dislike.js';
import Delete from './Delete_button.js'
const Movie_row=(props)=>{
    return(
        <div className="box1">
           <div className="box3">

                
            <p2>{props.data}</p2>
            
            <p3>{props.data3}</p3>
            
            <div className="box4">
              
                    <LikeButton/>
                    <Delete
                        {...props}
                    />

            </div>
          </div>
            <div className="box2"> 
                <img src={props.data2}/>
            </div>
        </div>
    )
}
export default Movie_row;


