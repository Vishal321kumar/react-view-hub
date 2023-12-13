import "./App.css";
// import videosdb from "./data/data";
import {useReducer, useState} from "react";
import Addvideo from "./components/Addvideo";
import VideoList from "./components/VideoList";
import VideoDispatchContext from "./context/VideoDispatchContext";
import VideosContext from './context/VideosContext';

function App() {
  
  console.log('app render')
  const [editableVideo,setEditableVideo] = useState(null)

  function videoReducer(videos,action){
    switch(action.type){
      case 'LOAD':
        return action.payload
      case 'ADD':
        return [
          ...videos,
          {...action.payload, id: 1000 + videos.length - 1},
        ]

      case 'DELETE':
        return  videos.filter(video=>video.id!==action.payload)

      case 'UPDATE':   
        const index=videos.findIndex(v=>v.id===action.payload.id)
        const newVideos=[...videos]
        newVideos.splice(index,1,action.payload)
        setEditableVideo(null)
        return (newVideos)

      default:
        return videos
    }

  }
  const [videos,dispatch] = useReducer(videoReducer,[])

  function editVideo(id){
    setEditableVideo(videos.find(video=>video.id===id))
  }

 

  return(
    <VideosContext.Provider value={videos}>
    <VideoDispatchContext.Provider value={dispatch}>
    <div className="App">
    <Addvideo  editableVideo={editableVideo}></Addvideo>
    <VideoList editVideo={editVideo}></VideoList>
    </div>
    </VideoDispatchContext.Provider>
    </VideosContext.Provider>
  );
}


export default App;
