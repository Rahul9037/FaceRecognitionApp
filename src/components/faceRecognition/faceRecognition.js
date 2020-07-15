import React from 'react';
import './faceRecognition.css'

const FaceRecognition = ({source , box}) => {
    return(
        <div className="imgcontainer relative">
        <img id="uploadimage" alt="" src={source}/>
        <div className="bounding-box" style={{top: box.topRow , right: box.rightCol , bottom: box.bottomRow ,left: box.leftCol}}></div>
        </div>

    )
}

export default FaceRecognition;