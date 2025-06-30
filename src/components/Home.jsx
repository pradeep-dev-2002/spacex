import VideoSection from "./VideoSection";
import ImageContainer from "./ImageContainer"
import Footer from "./Footer";
import { Fragment } from "react";

const Home = () => {
    const image_data = [
        {
            img:"assets/images/rocket-fire-D5D81tSi.jpg",
            small:"recent launch",
            big:"sxm-9 mission",
            btn: "watch"
        },
        {
            img:"assets/images/stars-DYuU5mOz.jpg",
            small:"recent launch",
            big:"starlink mission",
            btn: "rewatch"
        },
        {
            img:"assets/images/Starlink-Bruuxwb4.jpg",
            small:"recent launch",
            big:"starlink mission",
            btn: "rewatch"
        },
        {
            img:"assets/images/astronaut-PR2OUO69.jpg",
            small:null,
            big:"advancing human spaceflight",
            btn: "learn more"
        },
        {
            img:"assets/images/launch-CIKREtYa.jpg",
            small:null,
            big:"to make life multiplanetary",
            btn: "learn more"
        }
    ];
    return (
        <div id="home">
            <VideoSection/>
            {
                image_data.map((ele,index)=>{
                    return (
                        <Fragment key={index}>
                            <ImageContainer data={ele}/>
                        </Fragment>
                    )
                })
            }
            <Footer/>
        </div>
    );
};

export default Home;

