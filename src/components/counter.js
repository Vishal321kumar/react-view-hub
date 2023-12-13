import { useState } from "react";

function Counter(){
    console.log('render counter')

    const [number,setNumber] = useState(0);
     function handleclick(e){
        e.stopPropagation();
        setNumber(number=>number+1);
        setNumber(number=>number+1);

        // setTimeout(()=>{
        //      setNumber(number=>number+1);
        // },2000)
        console.log(number);
     }

    return( 
        <>
        <h1 style={{color:'white'}}>{number}</h1>
        <button  onClick={handleclick}>Add</button>

        </>
    )
}

export default Counter;