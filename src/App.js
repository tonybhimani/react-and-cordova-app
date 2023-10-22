import { useRef, useEffect } from "react";
import logo from './assets/img/logo.svg';
import './App.css';

function App() {

  // reference to the device status tag
  const deviceStatusRef = useRef();

  useEffect(() => {
    // change the properties of the device status
    deviceStatusRef.current.innerHTML = "Device is Ready";
    deviceStatusRef.current.className = "event received";
    deviceStatusRef.current.setAttribute("style", "display:block;");

    // this object should not be undefined running under Cordova
    console.log(window.cordova);
  }, []);

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
        <h3>Apache Cordova</h3>
        <div id="deviceready" className="blink">
          <p ref={deviceStatusRef} className="event listening">Connecting to Device</p>
        </div>
      </header>
    </div>
  );
}

export default App;
