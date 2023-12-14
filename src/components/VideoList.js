import Video from "./Video";
import Playbutton from "./playbutton";
import useVideo from "../hooks/Videos";
import axios from 'axios'
import { useEffect ,useCallback } from "react";
import useDispatch from "../hooks/VideoDispatch";
// import Counter from "./components/counter";


function VideoList({editVideo}){
  const videos= useVideo();
  const dispatch=useDispatch()
  const url="https://my.api.mockaroo.com/video.json?key=a858cdf0"
  console.log('videolist render')

  
  // async function handeClick(){
  //   const res=await axios.get(url)
  //   // console.log('getvideos',res.data)
  //   dispatch({type:'LOAD',payload:res.data}) 
  // }
  
  // useEffect(()=>{
  //   handeClick();
  // },[])



  const handeClick = useCallback(async () => {
    try{
    const res = await axios.get(url);
    dispatch({ type: 'LOAD', payload: res.data });
  }catch(error){
    console.error('error fetching data:',error)
  }
  }, [url, dispatch]);
  
  useEffect(() => {
    handeClick();
  }, [handeClick]);
  

    return(
       <>
       {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          editVideo={editVideo}
        >
        <Playbutton
          onPlay={() => console.log("playing  ",video.title)}
          onPause={() => console.log("paused ",video.title)}>
          {video.title}
        </Playbutton>
        </Video>
      ))}

        {/*
      <div style={{ clear: "both" }}>
       <Playbutton
          onPlay={(m) => console.log("playing")}
          onPause={() => console.log("paused")}>
          Play
      </Playbutton> 
        <Playbutton  msg="paused"  onSmash={()=>alert('paused')}>Pause</Playbutton>     
      </div>

      <div>
        <Counter></Counter>
      </div>
    */}

       </>
    )
}

export default VideoList;