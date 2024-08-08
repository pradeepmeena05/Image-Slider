import React, { useState } from 'react';
import './App.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const App = () => {
  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ];

  const [data, setData] = useState(0);

  const change1 = () => {
    setData(data === images.length - 1 ? 0 : data + 1);
  }

  const change2 = () => {
    setData(data === 0 ? images.length - 1 : data - 1);
  }

  return (
    <div className='container'>
      <button className='nav-button left' onClick={change2}><FaArrowLeft /></button>
      <div className='slider'>
        {images.map(
          (image, index) =>
            data === index && (
              <div key={image}>
                <img src={image} alt={`slide ${index}`} />
              </div>
            )
        )}
      </div>
      <button className='nav-button right' onClick={change1}><FaArrowRight /></button>
    </div>
  );
}

export default App;
