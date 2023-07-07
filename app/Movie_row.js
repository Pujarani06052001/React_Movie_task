import App from './page.js';
const Movie_row=(props)=>{
    return(
        <div className="box1">
           <div className="box3">

                
            <p2>{props.data}</p2>
            <p3>{props.data3}</p3>
            <div className="box4">
                <div className="box5">

                </div>
                      

                  <div className="box6"></div> 
                  <div className="box7"></div> 
                  <div className="box8"></div> 
             
                
                </div>
            

          </div>
            <div className="box2"> 
                <img src={props.data2}/>
            </div>
        </div>
    )
}
export default Movie_row;


