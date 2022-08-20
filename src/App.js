import './App.css';
import React from "react"
import TopBar from './components/TopBar';
import StoreListing from './components/StoreListing';
import { Card } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <TopBar/>
      <Card.Img variant="top" src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg"/>
      

      <StoreListing/>
    </div>
  );
}

export default App;
