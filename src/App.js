import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SignInScreen from './SignInScreen'
import IncidentMap from './IncidentMap'
import './css/App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
     signedin: false,
     toggleFormError: false,
     submissionAddress: ""

    }
  }
  
  loginSuccess = ()=>{
    this.setState({signedin: true})
  }
  reRenderForm = ()=>{
    console.log(this.state.toggleFormError, "un rendered app.js")
    this.setState({toggleFormError: true})
    console.log(this.state.toggleFormError, "re rendered app.js")
  }
  getAddress = (address) => {
    
    this.setState({submissionAddress: address})

    }
  render() {
    return (
      <div className="App">
        {this.state.signedin ? <IncidentMap address={this.state.submissionAddress}/> : <SignInScreen loginSuccess={this.loginSuccess} reRenderForm={this.reRenderForm} toggleFormError={this.state.toggleFormError}/>}
      </div>
    );
  }
}

export default App;