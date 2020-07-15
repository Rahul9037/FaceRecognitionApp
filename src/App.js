import React from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import Rank from './components/rank/rank';
import ImgaeLinkForm from './components/imgaeLinkForm/imgaeLinkForm';
import Particles from 'react-particles-js';
import './App.css';

const paramproperties ={
  "particles": {
      "number": {
          "value": 100
      },
      "size": {
          "value": 5
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className="particleproperties" 
       params={paramproperties} />
      <Navigation />
      <Logo />
      <Rank />
      <ImgaeLinkForm />
    </div>
  );
}

export default App;
