import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import anim from "../../assets/animation.json";
import Lottie from "lottie-react";
import compress from "../../assets/compress.svg";
import expand from "../../assets/expand.svg";
import grammar from "../../assets/grammar.svg";
import spell from "../../assets/spell.svg";
import image from "../../assets/image.svg";
import Background from "../../assets/grid.svg";
import { useNavigate } from 'react-router-dom';

function MyApp() {
  const featureData = [
    {
      icon: spell,
      title: 'Correcting spelling mistakes'
    },
    {
      icon: grammar,
      title: 'Checking for grammatical errors'
    },
    {
      icon: expand,
      title: 'Expanding the text',
    },
    {
      icon: compress,
      title: 'Shortening the text',
    },
    {
      icon: image,
      title: 'Image Suggestion',
    },
  ];

  const navigate = useNavigate();
  const handleown = (event) => {
    event.preventDefault();
    navigate("/MyApp");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'repeat',
       
      }}
      className="bg-black text-gray-200 flex flex-col min-h-screen w-full"
    >
      <div className='mt-4 text-center self-center'>
        <h className="md:text-8xl text-white text-5xl font-extrabold">TextGenie<span className='text-lime-500'>.</span></h>
      </div>
      <div className='mt-4 w-3/4 flex lg:flex-row flex-col text-left self-center'>
        <div className='font-thin lg:w-1/2 w-full'>
          <h className="md:text-5xl text-2xl text-lime-500 font-extrabold">ABOUT</h>
          <p className=" md:text-2xl">This project utilizes the power of both Optical Character Recognition (OCR) technology and state-of-the-art language generation models such as ChatGPT to provide a comprehensive solution for text extraction from images. The extracted text can then be modified as per the user's needs with the help of ChatGPT.</p>
        </div>
        <div className='lg:w-1/2 w-full flex justify-center'>
          <Lottie style={{ maxWidth: '100%', height: 'auto', width: '100%', maxWidth: '500px', maxHeight: '500px' }} animationData={anim} loop={true} />
        </div>
      </div>
      <div className='self-center w-3/4'>
        <h className="md:text-6xl text-lime-500 text-2xl font-extrabold">FEATURES</h>

        <div className=" text-black flex flex-wrap justify-center">
          {featureData.map((feature, index) => (
            <div className='lg:w-1/3 md:w-1/2 w-full p-2' key={index}>
              <div className="p-2 rounded-md bg-indigo-800 flex flex-col items-center space-y-3 text-xl text-center">
                <img className="w-10 h-10" src={feature.icon} alt={feature.title} />
                <h1 className="text-2xl text-white font-light capitalize break-words">{feature.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-4 lg:mt-6 mb-2 self-center w-3/4 flex'>
        <button onClick={handleown} className=' bg-lime-500 text-white rounded-md p-2 mx-auto  text-xl md:text-3xl  '>Try TextGenie.↪</button>
      </div>
    </div>
  );
}

export default MyApp;