import React,{useEffect, useState} from "react";

export function Counter(){
    const [counter,setCounter]=useState(0)

    function descreseValue(){
        setCounter(previousCounter=> previousCounter-1);
        setCounter(previousCounter=> previousCounter-1);
        
    }
    function increaseValue(){
        setCounter(previousCounter=> previousCounter+1);
        setCounter(previousCounter=> previousCounter+1);
        setCounter(previousCounter=> previousCounter+1);
        setCounter(previousCounter=> previousCounter+1);

    }

    useEffect(()=> {},[counter])

    return(
        <>
        <h1> Counter : {counter}</h1>
       <div>
            <button onClick={increaseValue} style={{marginRight:"20px"}}> Add Value by 4+</button>
            <button onClick={descreseValue}> Decrease Value by 2-</button>
       </div>
       <br/>


       <br/>

       <h2> Footer Counter as Same as Header :- {counter} </h2>
       


        </>
    )
}