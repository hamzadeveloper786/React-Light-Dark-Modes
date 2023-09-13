import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const Mode = () => {
  const [isLit, setLit] = useState(true);

  return (
    <div className='modes'>
      <p>React Modes</p>
      <h2 className={`bi ${!isLit ? "bi-moon" : "bi-brightness-high-fill"} room ${isLit ? "Lit" : "Dark"}`} id='bulb'></h2>
      <p>The Bulb Is {isLit ? "Light" : "Dark"}</p>
      <button onClick={() => setLit(!isLit)}>
      {isLit ? "Dark" : "Light"}
      </button>
    </div>
  );
};

ReactDOM.render(<Mode/>, document.querySelector('#root'));