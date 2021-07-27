import React,{useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import {Button} from '@material-ui/core';
import{motion} from "framer-motion"

export default function CardFlip({kelime,kelimeler,azalt,artir,sira}) {
    const[isFlipped,setIsFlipped]=useState(false)
    const handleClick =()=>{setIsFlipped(!isFlipped)}
    return (
        
        <motion.div
        initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:1}}
        
        >
           <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div onClick={handleClick} style={{height:"300px", width:"250px", backgroundColor:"#F5B041", color:"#212F3D",display:"flex", alignItems:"center",justifyContent:"center", borderRadius:"30px"}}>
         <h1>{kelime.ing}</h1> 
          
        </div>

        <div onClick={handleClick} style={{ overflow:"hidden", height:"300px", width:"250px", backgroundColor:"#212F3D", color:"#fff",display:"flex", alignItems:"center",justifyContent:"center", borderRadius:"30px", flexDirection:"column"}}>
          <h1>{kelime.tr}</h1>
           <h3>Example  <hr/> {kelime.example}</h3>
         
        </div>
      </ReactCardFlip> 
      <div style={{display:"flex", justifyContent:"space-around", marginTop:"20px"}}>
          <Button onClick={azalt} variant="contained" color="primary" disabled={sira===1}>Previous</Button>
      <Button onClick={artir}  variant="contained" color="primary" disabled={sira===kelimeler.length}>Next</Button>
      
       </div> 
       </motion.div>
    )
}
