import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesDesign from './components/Particles/ParticlesDesign';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';


function App() {
  const calculateFaceLocation = (result) => {
    const clarifaiFace = result.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width), // Could also do something like clarifaiFace.right_col * width
      bottomRow: height - (clarifaiFace.bottom_row * height) // Could also do something like height - clarifaiFace.bottom_col * height
    }
  }

  const displayFaceBox = (box) => {
    setBox( box );
  }
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState({});

const PAT = 'e18c874388ed4378bb0446a97e794be1';

const USER_ID = 'clarifai';       
const APP_ID = 'main';

const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';   



const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": imageUrl
                }
            }
        }
    ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
};


const onButtonSubmit = () => {
  fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
    .then(response => response.json())
    .then(result => displayFaceBox(calculateFaceLocation(result)))
    .catch(error => console.log('error', error));
}

  const onInputChange = (event) => {
    setImageUrl(event.target.value);
  }
  return (
    <div className="App"> 
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={ onInputChange } onButtonSubmit={ onButtonSubmit }/>
      <ParticlesDesign />
      <FaceRecognition
        topRow={box.topRow}
        rightCol={box.rightCol}
        bottomRow={box.bottomRow}
        leftCol={box.leftCol}
        imageUrl={imageUrl}
      />
    </div>
  );
}

export default App;
