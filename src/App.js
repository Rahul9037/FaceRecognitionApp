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

const initialState = {
  route: 'signin',
  isSignedIn : false,
  user : {
    id: '',
    name: '',
    email: '',
    password: '',
    entries: 0,
    joined: ''
  }
}

class App extends React.Component {

  constructor() {
    super()
    this.state = initialState;
  }

  onRouteChange = (route) => {
    if( route === 'home')
    {
      this.setState({ isSignedIn : true})
    }
    else
    {
      this.setState(initialState)
    }
    this.setState({ route: route })
  }

  loadUser = (data) => {
    this.setState({ user : {
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      entries: data.entries,
      joined: data.joined
    }})
  }

  updateEntries = (count) => {
    this.setState(Object.assign(this.state.user , {  entries : count}))
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
            <Rank user={this.state.user}/>
            <ImgaeLinkForm updateEntries={this.updateEntries} user={this.state.user}/>
          </div>
          :
          (this.state.route === 'signin' ?
            <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    )
  }
}

export default App;
