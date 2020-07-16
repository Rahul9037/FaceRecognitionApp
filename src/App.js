import React from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import Rank from './components/rank/rank';
import ImgaeLinkForm from './components/imgaeLinkForm/imgaeLinkForm';
import SignIn from './components/signIn/signIn';
import Particles from 'react-particles-js';
import Register from './components/register/register';
import './App.css';


const paramproperties = {
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

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      route: 'signin',
      isSignedIn : false
    }
  }

  onRouteChange = (route) => {
    if( route === 'home')
    {
      this.setState({ isSignedIn : true})
    }
    else
    {
      this.setState({ isSignedIn : false})
    }
    this.setState({ route: route })
  }

  render() {
    return (
      <div className="App">
        <Particles className="particleproperties"
          params={paramproperties} />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
        {this.state.route === 'home' ?
          <div>
            <Logo />
            <Rank />
            <ImgaeLinkForm />
          </div>
          :
          (this.state.route === 'signin' ?
            <SignIn onRouteChange={this.onRouteChange} />
            : <Register onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    )
  }
}

export default App;
