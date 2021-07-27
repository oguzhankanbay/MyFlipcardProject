import React,{useState} from 'react'
import Cardinput from './Cardinput'
import CardFlip from './CardFlip'
import { Button } from '@material-ui/core';
import{motion} from "framer-motion"
export default function List() {
    const[kelimeler, setKelimeler]=  useState([
        {id:1, ing:"bring", tr:"getirmek", example:"bring them all because I will beat you "},
        {id:2, ing:"Go", tr:"gitmek", example:"go down"},
        {id:3, ing:"hold", tr:"tutmak", example:"hold it"},
    ])
    const [islem, setIslem] = useState(false);
    const kelimeKartı=()=>{
        setIslem(true)
    }
    const kelimeekle=()=>{
        setIslem(false)
    }
    const [Sira, setSira] = useState(1)
    const Artir =()=>{
        setSira(prevState=> prevState+1)
    }
    const Azalt =()=>{
        setSira(prevState=> prevState-1)
    }
    return (
        <motion.div 
        initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:1}}>
         <div style={{display:"flex", justifyContent:"space-around" , margin:"10px"}}>
         <Button variant="contained" color="secondary"  onClick={kelimeKartı}>
        Cards
      </Button>
      <Button variant="contained" color="secondary" onClick={kelimeekle} >
        Add Words
      </Button>
        </div> 
        {
            islem ? kelimeler.map(kelime=>{
                if(kelime.id===Sira){return <CardFlip key={kelime.id} kelime={kelime} azalt={Azalt} artir={Artir} kelimeler={kelimeler} sira={Sira}/>}
            }):
            
            <Cardinput Kelime={kelimeler}  setKelimeler={setKelimeler}/>
        }  
        </motion.div>
    )
}
