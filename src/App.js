import { useEffect, useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import vid from './vid.mp4';
import './App.css';
import {webcamToggle} from './demo.js'



const App = () => {
const [videoSrc, setVideoSrc] = useState('');
  const [message, setMessage] = useState('Click Start to transcode');
  const ffmpeg = createFFmpeg({
    log: true,
  });
  const doTranscode = async () => {
   
    setMessage('Loading ffmpeg');
    await ffmpeg.load();
    setMessage('Start transcoding');
    ffmpeg.FS('writeFile', 'test.avi', await fetchFile('{vid}'));
    await ffmpeg.run('-i', 'test.avi', 'test.mp4');
    setMessage('Complete transcoding');
    const data = ffmpeg.FS('readFile', 'test.mp4');
    setVideoSrc(URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' })));
  }; 

  

  return (
    <div className="App">
      <header className="App-header">
        <button id="btn" onClick={webcamToggle}> web cam </button>
        <video id="v2" loop autoPlay  style={{display:'block' }}> 
        <source src={vid} type="video/mp4"/> 
        </video> 
        <p>
           {message}
        </p>
         <button onClick={doTranscode}>Start</button>
      </header>
    </div>
  );
}

export default App;
