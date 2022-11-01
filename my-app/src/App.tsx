import { color } from '@mui/system';
import React from 'react';
import { mockComponent } from 'react-dom/test-utils';
import './App.css';


function App() {
  return (
    <div className="App">
        <div className="div1">
          Isaiah's Section
        </div>
        <div className="div2">
          Nick's Section
        </div>
        <div className="div3">
            <nav className="navigation_bar">
              <img src="ITOlogo.png" alt="ITO Logo" width="139" height="109"></img>
              <ul className="navigation_list">
                <li className="navigation_list_item"><a href="#home">Home</a></li>
                <li className="navigation_list_item"><a href="#current_projects">Current Projects</a></li>
                <li className="navigation_list_item"><a href="#about_us">About Us</a></li>
                <li className="navigation_list_item"><a href="#contact_us">Contact Us</a></li>
                <li className="navigation_list_item"><a href="#join_our_discord">Join Our Discord</a></li>
              </ul>
              <ul className="navigation_list">
                <li className="navigation_list_item"><a href="#TBD">Login</a></li>
                <li className="navigation_list_item"><a href="#TBD">Sign Up</a></li>
                <li className="navigation_list_item">
                  <a href="#darkmode"><img id = "moon" src="darkmode.png" alt="Light/Dark Mode" width="35" height="35"></img></a>
                </li>
              </ul>
            </nav>
        </div>
    </div>
  );
}

function darkMode() {
  document.getElementById("moon")?.replaceWith("lightmode.png");
}

export default App;
