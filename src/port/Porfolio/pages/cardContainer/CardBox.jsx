import React from 'react'
import CardIamges from './Images';
import { useState } from 'react';


function CardBox() {


   const [Images, setImages] = useState();
   

  return (
    <>


    {
      CardIamges.map((CurElem)=>{
        return  <div className="box">

        <img src={CurElem.image} alt="" />
    </div> 


      })
    

    }
    
    </>
  );
}

export default CardBox