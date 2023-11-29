import React from 'react'
import './App.css';
import WordToPdfConverter from './components/WordToPdfConverter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Word to PDF Converter</h1>
      </header>
      <main>
        <WordToPdfConverter />
      </main>
    </div>
  );
}

export default App;













// import Navbar from './components/navbar';
// import ImageCropper from './components/ImageCropper'
// import ImageConverter from './components/ImageConverter'
// import ImageTextEditor from './components/ImageTextEditor'
// import ImageToPPTConverter from './components/ImageToPPTConverter'
// import ImageToPdf from './components/ImageToPdfConverter'
// import Cards from './components/Cards';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ImageTools from './components/ImageTools';
// import ImageCompressorComponent from './components/ImageCompressorComponent';
// function App() {
//   // const [mode, setmode] = useState("light")
//   // const toggleMode=()=>{
//   //   if(mode==='light'){
//   //     setmode('dark');
//   //     document.body.style.backgroundColor='#0c263f'
//   //   }
//   //   else{
//   //     setmode('light');
//   //     document.body.style.backgroundColor='white'
//   //   }
//   // }
//   return (
//     <>
//      <Router>
//      <Navbar title="Text Manager" about="About us" />
//       <Routes>
//          <Route path="/" element={<Cards />} />
//          <Route path="/ImageTools" element={<ImageTools />} />
//          <Route path="/ImageTools/ImageCropper" element={<ImageCropper />} />
//          <Route path="/ImageTools/Add-text-to-Image" element={<ImageTextEditor />} />
//          <Route path="/ImageTools/Image-to-PowerPoint-Converter" element={<ImageToPPTConverter />} />
//          <Route path="/ImageTools/Image-to-PDF" element={<ImageToPdf />} />
//          <Route path="/ImageTools/imageConverter" element={<ImageConverter />} />
//          <Route path="/ImageTools/imageCompressor" element={<ImageCompressorComponent />} />
//      </Routes>
//      </Router>
//      {/* <div>hello</div>
//      <VideoDownloader/> */}
//      </>
//   );
// }
// export default App; 



