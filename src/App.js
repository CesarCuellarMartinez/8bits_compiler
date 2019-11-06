import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Tone from 'tone';
var squareOptions = {
  oscillator:{
    type: "square"
  },
  envelope:{
    release: 0.07
  }
};

let synth = new Tone.Synth().toMaster();
let notes = ["C3", "Eb3", "G3", "Bb3"];
class App extends Component{
  
  reproducir = () =>{
    let synthPart = new Tone.Sequence(
      function(time, note) {
        synth.triggerAttackRelease(note, "8n", time);
      },
      notes,
      "4n"
    );
    synthPart.start();
    Tone.Transport.start();
    
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button  name="reproducir" id="btn_reproducir" onClick={this.reproducir}>
            Reproducir
          </button>
        </header>
      </div>
    );
  }
}
export default App;
