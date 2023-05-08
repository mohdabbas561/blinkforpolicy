import React from 'react';
import './MidContainer.css';
import midimg from "../../src/MidIMG.JPG"

function App() {
  return (
    <div className="container1234">
      <div className="child"><img src="https://trapthedeal.dousoftit.com/uploads/highlight_products/1675312192.jpg" alt="Image 1" /></div>
      <div className="child"><img style={{height:"100%"}} src={midimg}></img></div>
      <div className="child"><img src="https://trapthedeal.dousoftit.com/uploads/highlight_products/1675312192.jpg"></img></div>
    </div>
  );
}

export default App;
