import { useState } from "react"
import { Button } from "@mui/material"
export default function BackGroundChanger(){

    const [bgColor, setBgColor]=useState('black');
    function ChangeColor(color){
        setBgColor(color);
    }
    return(
        <div style={{ width:'100%',height:'100vh',backgroundColor:bgColor}}>
           <Button variant="contained" color="success" onClick={()=>ChangeColor('green')}>
            Green
            </Button>
            <Button variant="contained" color="error" onClick={()=>ChangeColor('red')}>
            Red
            </Button>
            <Button variant="contained" onClick={()=>ChangeColor('blue')}>
             Blue
            </Button>
        </div>
    )
}