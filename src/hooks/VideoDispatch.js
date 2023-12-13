import { useContext } from "react";
import VideoDispatchContext from "../context/VideoDispatchContext";

function useDispatch(){
    return useContext(VideoDispatchContext)
}
export default useDispatch;