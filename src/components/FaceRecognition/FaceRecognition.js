import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, topRow, rightCol, bottomRow, leftCol }) => {
    
    return (
        <nav>
            { imageUrl && 
                <div className="displayedImg">
                    <img id="inputImage" src={imageUrl} alt="testImg" />
                    {/* Using destructured properties in the styles */}
                    <div className="bounding-box" style={{ top: topRow, right: rightCol, bottom: bottomRow, left: leftCol }}></div>
                </div>
            }
        </nav>
    );
}

export default FaceRecognition;
