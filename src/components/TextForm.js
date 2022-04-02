import React, {useState} from 'react'

export default function TextForm(props) {
  const[text, setText] = useState('Enter text here');
  
  const handleUpClick = () =>{
    // console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event) =>{
    // console.log("On change");
    setText(event.target.value);
  }

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText); 

  }

  const handleClear = () => {
    setText("");
  }

  const handleAlternate = () => {
    let newText = "";
    let sampleText = text.toLowerCase();
    for (let i = 0; i < text.length; i++){
      if (i % 2 == 0){
        newText = newText + sampleText[i];
      } else {
        newText = newText + sampleText[i].toUpperCase();
      }
    }
    setText(newText);
  }

  return (
    <>
      <div className='container my-3'>
          <h1>{props.heading}</h1>
          <div className="my-3">
              <textarea className="form-control" onChange = {handleOnChange} value={text} id="myBox" rows='8'></textarea>
          </div>
          <button className="btn btn-primary mx-4 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-4 my-2" onClick={handleDownClick}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-4 my-2" onClick={handleClear}>Clear Text</button>
          <button className="btn btn-primary mx-4 my-2" onClick={handleAlternate}>Alternate Capitalize</button>
      </div>
      <div className='container my-4'>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}


// Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum saepe magnam non repudiandae. Aliquid necessitatibus molestiae et libero magnam, odit, in modi labore, iste earum eum porro ipsum assumenda corporis? Commodi provident eligendi expedita iusto illo neque sequi error suscipit natus dignissimos. Omnis?