import React,{useState} from 'react'
export default function TextForm(props) {
  const[text,setText]=useState('Enter your text here!')
    const clickhandle=()=> {
        // console.log("stop clicking"+ text)
        if (text !== text.toUpperCase()) {
          let newtext= text.toUpperCase();
          setText(newtext)
          props.showAlert("Converted to UPPER CASE","success");
          console.log('String is not in uppercase!');
        }
        else{
          props.showAlert("Already in UPPERCASE","info");
        }
    }
    const clickhandlelow=()=> {
      if (text !== text.toLowerCase()) {
         // console.log("stop clicking"+ text)
         let newtext= text.toLowerCase();
         setText(newtext)
         props.showAlert("Converted to lower case","success");
        console.log('String is not in uppercase!');
      }
      else{
        props.showAlert("Already in lowercase","info");
      }
     
    }
    const clear=()=> {
        // console.log("stop clicking"+ text)
        if(text!==""){
        let newtext= "";
        setText(newtext)
        props.showAlert("Cleared","success");
      }
      else{
        props.showAlert("Already cleared","info");
      }

    }
    const copyclip=(event)=> {
        console.log("Copied")
        navigator.clipboard.writeText(text)
        props.showAlert("Copied","success"); 
    }
    const changing=(event)=> {
        console.log("Changing occoured")
        setText(event.target.value)
    }
    // setText("Enter here ur fucking text") righ way to set text in usestate
    return (
        <>
      <div className='container' style={{color: props.mode==='dark'?'white': '#0c263f' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={changing} style={{backgroundColor: props.mode==='dark'?'#0c263f': 'white', color: props.mode==='dark'?'white': '#0c263f'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={clickhandle}>CONVERT TO UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={clickhandlelow}>convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={copyclip}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={clear}>Clear</button>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white': '#0c263f' }}>
        <h2>Your text summary</h2>
        <p>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}</p>
        <h3>Preview of your text</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
