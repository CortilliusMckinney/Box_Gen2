
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';

import "./App.css";
import { useState } from "react";

const color = {
  color:"",
}

function App() {
  const [ inputArray, setInputArray ] = useState(color);
  const [boxArray, setBoxArray ] = useState([]);

  const handleInput = (e) => {
  //  setInputArray ({color: e.target.value})
   setInputArray ( {...inputArray,color: e.target.value})
};

const handleOnclick=(e) =>{
e.preventDefault();
setBoxArray([...boxArray,inputArray, ])

setInputArray(color)
}
 

  return (
   
    <div className="App">
      <form>
        <div className="form-bg ">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-4">
                <div className="form-container">
                  <h3 className="title">Box Generator</h3>
                  <form className="form-horizontal">
                    <div className="form-group">
                      <div className="d-flex flex-row align-items-center">
                        <label>Color</label>
                        <input
                       
                          className="form-control"
                          type="text"
                          placeholder="Enter Box Color"
                          onChange={handleInput} 
                          value= {inputArray.color}//This is a reflection of state
                        />
                      </div>
                    </div>

                    <button
                      onClick={handleOnclick}
                      type="button"
                      className="btn btn-primary text-white" style={{backgroundColor: inputArray}}
                    >
                      Click
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
{

  boxArray.map((element,index) =>(
  <div className="boxes">
<div  key={index} style={ {backgroundColor: element.color, width: "150px", height: "120px"} }></div>
</div>
  ))
  
  }
    
     
     

        

      
    </div>
   
  );
}

export default App;
