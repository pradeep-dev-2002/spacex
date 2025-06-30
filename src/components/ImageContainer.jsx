const ImageContainer = (props) => {
    const {img,small,big,btn} = props.data
    return (
        <div className="image-container">
            <img src={img} alt="" />
            <div className="content">
                {small!=null?<h4>{small}</h4>:""}
                <h1>{big}</h1>
                <button>{btn}</button>
            </div>
        </div>
    );
};

export default ImageContainer;