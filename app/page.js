"use client"
import React,{useState} from "react";
import Header from './Header.js';
import Footer from './Footer.js';
import row from './globals.css';
import Movie_row from "./Movie_row.js";
import Delete from "./Delete_button.js"



const people = [{
  id: 0,
  name: 'Dear Zindagi',
  profession: 'Drama',
  imgage:'dear_zindgi.png',
}, 
{
  id: 1,
  name: 'Brave',
  profession: 'Adventurous, ComedyS',
  imgage:'Brave.png',
  

}, 
{
  id: 2,
  name: 'Moana',
  profession: 'Adventurous, ComedyS',
  imgage:'Moana.png',
}, 
{
  id: 3,
  name: 'Mulan',
  profession: 'Adventurous, ComedyS',
  imgage:'Mulan.png',
 
 }, 
{
  id: 4,
  name: 'He Named Me Malala',
  profession: 'Biography, Documentary',
  imgage:'MALALA.png',

 }, 
{
  id: 5,
  name: 'Soul Surfer',
  profession: 'Drama,Biography, Family',
  imgage:'Soul Surfer2x.png',
 }, 
{
  id: 6,
  name: 'Bend It Like Beckham',
  profession: 'Comedy,Drama & Romance',
  imgage:'Beckham.png',
 }, 
{
  id: 7,
  name: 'Into The Wild',
  profession: 'Adventure,Biography,Drama',
  imgage:'Into the Wild.png',
 }, 
{
  id: 8,
  name: 'The Pursuit Of Happyness',
  profession: 'Drama,Biography',
  imgage:'The Pursuit OF HappyNess.png',
 }, 
{
  id: 9,
  name: 'The Intouchables',
  profession: 'Drama,Biography,Drama',
  imgage:'The Intouchables.png',


 
}];

const App=()=>{
    const [data ,setData]=useState(people);
    function handleDelete(id){
        const dataIndex = data.filter((movie) => movie.id !== id);
            setData(dataIndex)

  }


    return (
        <>
            <Header/>
            
            {data.map(movie => (
            <Movie_row
                data={movie.name}
                data3={movie.profession}
                data2={movie.imgage}
                onDelete={()=>handleDelete(movie.id)}
       
    />
))};

    <Footer/>
   
      
    </>
  );
};

export default App;





















    
  
