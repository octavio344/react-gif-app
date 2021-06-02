import React, { useState } from 'react';
import './GifExpertApp.css';
import { AddCategorty } from './components/AddCategory'
import { GridGif } from './components/GridGif';

function GiftExpertApp() {

  
   const [nombres, setNombres] = useState([ "Saitama"]);

 

  // const handleAdd = (value) =>{
  //   setNombres(
  //     cats => [...cats,value]
  //     //[...nombres, "Pepa"]
  //   )
  // } 

  return (
    <>
      <h2>Gift expert App</h2>
      <AddCategorty setNombres={setNombres}></AddCategorty>
      <hr/>
      <ol>
        { 
          nombres.map( (nombre,indice) =>(
            <GridGif 
              key={nombre}
              category={nombre}>
            </GridGif> 
          ))
        }
      </ol>
    </>
  );
}

export default GiftExpertApp;
