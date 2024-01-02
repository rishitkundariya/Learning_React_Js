import { TextField,Button,Slider,FormControlLabel,Checkbox } from "@mui/material";
import { useState,useEffect, useCallback, useRef } from "react";

export default function PasswordGenerator() {

  const [length , setLength]=useState(8);
  const [Password , setPassword]=useState('');
  const [isNumberAllowed, setIsNumberAllowed]=useState(false);
  const [isspecialCharaterAllowed, setisspecialCharaterAllowed]=useState(false);
  const passwordRef = useRef(null);


  function CopyPassword(){
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
  }
  const PasswordGenerator = useCallback(()=> {
    let tempPassword= "";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed){
      str += "0123456789";
    }
    if (isspecialCharaterAllowed){
      str += "~!@#$%^&*()_+,<>.:;{}[]";
    }
    for(let i=0;i<length;i++){
      const index=Math.random();
       tempPassword += str[Math.floor( index*(str.length+1))] ;
    }
      setPassword(tempPassword);
  },[length,setPassword,isNumberAllowed,isspecialCharaterAllowed]);
  

 useEffect(  () =>{PasswordGenerator()}
   , [length,isNumberAllowed,isspecialCharaterAllowed]);
  
  return (
    <div style={{ width: "600px", textAlign: "center" }}>
        <h3>Password Generator</h3>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        variant="filled"
        size="small"
        value={Password}
        inputRef={passwordRef}
        style={{margin:"10px"}}
      />
      <Button variant="contained"  style={{margin:"10px"}} onClick={CopyPassword}>Copy Password</Button>
      <br/>
      <Slider style={{margin:"10px",width:"100px",verticalAlign:"middle"}} min={8} onChange={(e,value)=>setLength(value)} value={length}  />
      <label style={{margin:"10px"}}>Lenght : {length}</label>
      <FormControlLabel control={<Checkbox value={isNumberAllowed} onChange={()=> setIsNumberAllowed(isNumberAllowed?false:true)} />} label="Number" />
      <FormControlLabel control={<Checkbox value={isspecialCharaterAllowed} onChange={()=> setisspecialCharaterAllowed(isspecialCharaterAllowed?false:true)} />} label="Special Character" />
    </div>
  );
}
