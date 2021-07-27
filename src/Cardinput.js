import React, {useState} from "react";
import { TextField, Button } from "@material-ui/core";
import{motion} from "framer-motion"
export default function Cardinput({Kelime, setKelimeler}) {
    const [input, setInput] = useState({id:null, ing:"", tr:"", example:""})
    const changeEng=(e)=>{
        setInput({...input, ing:e.target.value})
    }
    const changeTr=(e)=>{
        setInput({...input, tr:e.target.value})
    }
    const changeExemple=(e)=>{
        setInput({...input,id:Kelime.length+1, example:e.target.value})
        
    }
    const Ekleme=(e)=>{

        setKelimeler([...Kelime, input])
        
        setInput({id:null, ing:"", tr:"", example:""})
        
        e.preventDefault()
        
        
        
    }
   
  return (
    <motion.div style={{ display: "flex", flexDirection: "column" }} initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:1}}>
      <TextField id="standard-basic" label="English" value={input.eng} onChange={changeEng}  />
      <TextField id="standard-basic" label="Turkish" value={input.tr} onChange={changeTr}  />
      <TextField value={input.example} onChange={changeExemple}  
        id="standard-basic"
        label="Example"
        style={{ width: "400px" }}
      />
              <Button  onClick={(e)=>{Ekleme(e)}} variant="contained" color="primary" style={{ margin:"10px" }} >
          SAVE
        </Button>
    </motion.div>
  );
}
