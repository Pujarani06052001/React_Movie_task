"use client"
import React,{useState} from "react";
import Header from './Header.js';
import Movie_row from "./Movie_row.js";
import Form from './Add_movie_form';
import Movie_Form from './movie_form';
import Footer from './Footer.js';
import row from './globals.css';
import Delete from "./Delete_button.js";


  

const people = [{
   
  id: 0,
  name: 'Dear Zindagi',
  year_time:"2016 • 2h 31m",
  genres: 'Drama',
  imgage:'dear_zindgi.png',
  discription:"Description",
  Discription:"Two ambitious girls, despite their parents' wishes, have their hearts set on careers in professional football.",
  
}, 
{
  id: 1,
  name: 'Brave',
  year_time:"2012 • 1h 33m",
  genres: 'Adventurous, ComedyS',
  imgage:'Brave.png',
  discription:"Description",
 
  

}, 
{
  id: 2,
  name: 'Moana',
  year_time:"2016 • 1h 47m",
  genres: 'Adventurous, ComedyS',
  imgage:'Moana.png',
  discription:"Description",

}, 
{
  id: 3,
  name: 'Mulan',
  year_time:"1998 • 1h 27m",
  genres: 'Adventurous, ComedyS',
  imgage:'Mulan.png',
  discription:"Description",
  
 }, 
{
  id: 4,
  name: 'He Named Me Malala',
  year_time:"2015 • 1h 28m",
  genres: 'Biography, Documentary',
  imgage:'MALALA.png',
  discription:"Description",
 

 }, 
{
  id: 5,
  name: 'Soul Surfer',
  year_time:"2011 • 1h 52m",
  genres: 'Drama,Biography, Family',
  imgage:'Soul Surfer2x.png',
  discription:"Description",
  
 }, 
{
  id: 6,
  name: 'Bend It Like Beckham',
  year_time:"2002 • 1h 52m",
  genres: 'Comedy,Drama & Romance',
  imgage:'Beckham.png',
  discription:"Description",
 
 }, 
{
  id: 7,
  name: 'Into The Wild',
  year_time:"2007 • 2h 28m",
  genres: 'Adventure,Biography,Drama',
  imgage:'Into the Wild.png',
 
 }, 
{
  id: 8,
  name: 'The Pursuit Of Happyness',
  year_time:"2006 • 1h 57m",
  genres: 'Drama,Biography',
  imgage:'The Pursuit OF HappyNess.png',
  discription:"Description",
  
 }, 
{
  id: 9,
  name: 'The Intouchables',
  year_time:"2011 • 1h 52m",
  genres: 'Drama,Biography,Drama',
  imgage:'The Intouchables.png',
  discription:"Description",
  

 
}];




const App = () => {
  const [data, setData] = useState(people); 
  const [voteCount, setVoteCount] = useState({});

  const handleLike = (id) => {
    setVoteCount((prevVotes) => {
      const updatedVotes = { ...prevVotes };
      updatedVotes[id] = (updatedVotes[id] || 0) + 1;
      return updatedVotes;
    });
  };

  const handleDislike = (id) => {
    setVoteCount((prevVotes) => {
      const updatedVotes = { ...prevVotes };
      updatedVotes[id] = (updatedVotes[id] || 0) - 1;
      return updatedVotes;
    });
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((movie) => movie.id !== id));
  };

  const Short_Data = data.sort((a, b) => {
    const like = voteCount[a.id] || 0;
    const dislike = voteCount[b.id] || 0;
    return dislike - like;
  });

  return (
  <>
    <Header /> 
    {Short_Data.map((movie) => (
      <Movie_row
        key={movie.id}
        data={movie.name}
        data4={movie.year_time}
        data3={movie.genres}
        data2={movie.imgage}
        data5={movie.discription}
        data6={movie.Description}
        
        onDelete={() => handleDelete(movie.id)}
        handleLike={() => handleLike(movie.id)}
        handleDislike={() => handleDislike(movie.id)}
        voteCount={voteCount[movie.id]}
      />
    ))}
    <Form />
    <Movie_Form/>

    <Footer />
  </>
);
};

export default App;



