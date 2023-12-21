import React from "react"; 
import './FaceRecognition.css';
const FaceRecognition = ({imageUrl}) => {
    return(
        <nav>
            { imageUrl && 
                <div className="displayedImg">
                    <img src={imageUrl} alt="testImg" />
                </div>
            }
        </nav>
    );
}
export default FaceRecognition;