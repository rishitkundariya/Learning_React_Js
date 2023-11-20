export function CustomComponent(){
    function clickMe(){
        console.log("Hello From console Log.");
    }

 return(
    <>
    <h1>This is from new component.</h1>
      <button onClick={clickMe}> This will console message. </button>
    </>
 )
}