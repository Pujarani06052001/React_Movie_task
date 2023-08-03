import App from './page.js';
import LikeButton from './Like_Dislike.js';
import Delete from './Delete_button.js';
import Form from "./Add_movie_form.js";


const Movie_row = (props) => {
  return (
    <div>
      <div className="row_w">
        <div className="box3">
          <div className="movie1">
            <h1>{props.data}</h1>
            <p5>
              {props.data4} | {props.data3}
              {props.data5}
            </p5>
            
          </div>
          <div className="box4">
            <LikeButton
              handleLike={props.handleLike}
              handleDislike={props.handleDislike}
              voteCount={props.voteCount}
            />
            <Delete {...props} />
          </div>
        </div>
        <div className="box2">
          <img className="movie_img" src={props.data2} />
        </div>
        <div class="bottom"></div>
      </div>   

    </div> 
  );
};
    
export default Movie_row;

