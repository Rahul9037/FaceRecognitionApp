import React from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImgaeLinkForm from './components/imgaeLinkForm/imgaeLinkForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <ImgaeLinkForm />
      {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
