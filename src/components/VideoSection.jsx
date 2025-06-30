import Navbar from "./Navbar";
import VideoContainer from "./VideoContainer";

const VideoSection = () => {
    const video_data = {
        video_url:"assets/videos/starshiplaunch-DGL85-4R.mp4",
        small: "recent launch",
        big:"starship's sixth flight test",
        btn:"rewatch"
    }
    return (
        <div className="video-section">
            <Navbar/>
            <VideoContainer data={video_data}/>
        </div>
    );
};

export default VideoSection;