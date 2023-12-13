import "./Video.css"
import useDispatch from "../hooks/VideoDispatch";
function Video({ title, channel, views, time, verified ,id,children,editVideo}){
  console.log('render video',id)

  const dispatch=useDispatch()


  return(
    <>
    
    <div className="container">
    <button className="close" onClick={()=> dispatch({type:'DELETE', payload:id})}>X</button>
    <button className="edit" onClick={()=>editVideo(id)}>Edit</button>
      <div className="pic">
        <img src={`https://picsum.photos/id/${id}/1040/560`} alt="" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel}  {verified && '✔'}</div>
      <div className="views">{views} views <span>.</span> {time}</div>
      <div>{children}</div>
    </div>
  
    </>
    

  )
}

export default Video;