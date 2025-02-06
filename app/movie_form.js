// const Movie_Form=()=>{
//     return(
//       <div className="row8">
//         <h3>Fill this form to add Movie</h3>
//         <div className="row9">
//             <p className="movieName">Name of movie</p>
//             <input className="userinput"></input>
//             <p className="movieYear">Year of Release</p>
//             <input className="userinput"></input>
//             <img className="Poly" src="Polygon 3 (1).png" />
            
//         </div>
       
//       </div>
      

      
        
       
//     );

// };
// export default Movie_Form;
import { useState } from "react";
import Movie_Form from "./movie_form";

const Form = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm((prev) => !prev); // Toggle form visibility
  };

  return (
    <div className="row6">
      <h1>Add a New Movie</h1>
      <h>To add a movie you have to fill a form. The added movie will appear in the list above</h>
      <div className="col row7">
        <div className="col row7_box1" onClick={handleToggleForm}>
          <span className="row7_text1">New Movie</span>
        </div>
        <div className="col row7_img">
          <img className="aadimg" src="Frame 96.png" alt="++" />
        </div>
      </div>

      {showForm && (
        <div className="form-container">
          <span className="close-btn" onClick={handleToggleForm}>❌</span>
          <Movie_Form />
        </div>
      )}
    </div>
  );
};

export default Form;
