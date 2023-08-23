import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>
  {
    //console.log("UpparCase is clicked");
    let new_text=text.toUpperCase();
    setText(new_text);
    props.showAlert("Converted into Upper Case", "success")
  }
  const handleUpClick1 = ()=>
  {
    //console.log("UpparCase is clicked");
    let new_text=text.toLowerCase();
    setText(new_text);
    props.showAlert("Converted into Lower Case", "success")
  }
  const handleUpClick2 = ()=>
    {
      function convertToSentenceCase(paragraph) 
      {
        // Split the paragraph into an array of sentences
        const sentences = paragraph.split('. ');
      
        // Convert the first letter of each sentence to uppercase and the rest to lowercase
        const sentenceCaseSentences = sentences.map(sentence =>
        {
          return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
        });
      
        // Join the sentences back into a paragraph
        const sentenceCaseParagraph = sentenceCaseSentences.join('. ');
      
        return sentenceCaseParagraph;
      }
      const inputParagraph = text;
      const convertedParagraph = convertToSentenceCase(inputParagraph);
      setText(convertedParagraph);
      props.showAlert("Converted into Sentence Case", "success")
  }
    
  const handleOnChange =(event)=>
  {
    setText(event.target.value)
  }
  const [text, setText] = useState();
  //setText("New text")if we want to change the text
  return(
    <>
      <div className="container" style={{color: props.Mode==='dark'?'white' :'black'}}>
          <h3>{props.heading}</h3>
        <div className="mb-3">  
          <textarea className="form-control" rows="8" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor: props.Mode === 'dark'?'grey' :'white', color: props.Mode === 'dark'?'white':'black'}} ></textarea>
      </div>
            <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpparCase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick1}>Convert to LowerCase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick2}>Convert to SentenceCase</button>
      </div>
      <div className="container my-3" style={{color: props.Mode==='dark'?'white' :'black'}}>
      <h2>Preview</h2>
      <p>{text}</p>
      </div>
    </>
  ) 
}