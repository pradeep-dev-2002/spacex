const VideoContainer = (props) => {
    const {video_url,small,big,btn} = props.data;
    return (
        <div className="video-container">
            <video src={video_url} autoPlay loop muted></video>
            <div className="content">
                <h4>{small}</h4>
                <h1>{big}</h1>
                <button>{btn}</button>
            </div>
        </div>
    );
};

export default VideoContainer;