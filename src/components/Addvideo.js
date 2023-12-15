import "./Addvideo.css"
import {useEffect, useRef, useState } from "react";
import useDispatch from "../hooks/VideoDispatch";



function Addvideo({editableVideo}) {
  const initialState={
    time: "6 month ago",
    channel: "zoro.to",
    verified: true,
    title:[],
    views:[]
  }
  
  const [video,setVideo]=useState(initialState)
  
  const dispatch=useDispatch()

  const inputref = useRef(null)

    function handleSubmit(e){
      e.preventDefault();
      if(editableVideo){
        dispatch({type:'UPDATE', payload:video})
      }
      else{
        dispatch({type:'ADD', payload:video})
      }
      setVideo(initialState)  
      
    }
    function handleChange(e){
        setVideo({...video,
          [e.target.name]:e.target.value
        })
    }

    useEffect(()=>{
       if(editableVideo){
        setVideo(editableVideo)
       }
       inputref.current.focus()
      //  inputref.current.value="demo"
    },[editableVideo])

  return(
    <div className="heading-layout">
    
    <form>
        <div className="input-form">
        <input ref={inputref} type="text" name="title" placeholder="title" value={video.title} onChange={handleChange}></input>
        <input type="text" name="views" placeholder="views" value={video.views} onChange={handleChange}></input>
        <button
             onClick={handleSubmit} >{editableVideo?'Edit':'Add'} Video
        </button>
        </div>
    </form>
    <div className="name">REACT View Hub</div>

    </div>

  );
}

export default Addvideo;
