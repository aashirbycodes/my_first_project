import {useState} from "react"

function App(){

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  function weightChange(e){
    setWeight(e.target.value);
  }
  function heightChange(e){
    setHeight(e.target.value);
  }
  function calculateBMI(){
    let h = height / 100;
    setBmi(weight / (h * h));
  }

  //Interest

  const [p, setP] = useState("");
  const [r, setR] = useState("");
  const [t, setT] = useState("");
  const [interest, setInterest] = useState("");

  function pChange(e){
    setP(e.target.value);
  }
  function rChange(e){
    setR(e.target.value);
  }
  function tChange(e){
    setT(e.target.value);
  }
  function calculateInterest(){
    setInterest((p * r * t) / 100);
  }

  //Area

  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [area, setArea] = useState("");

  function lengthChange(e){
    setLength(e.target.value);
  }
  function widthChange(e){
    setWidth(e.target.value);
  }
  function calculateArea(){
    setArea(length * width);
  }
   
  return(
    <div>
      <h2>BMI Calculator</h2>
      <input placeholder="Weight" onChange={weightChange} />
      <input placeholder="Height" onChange={heightChange} />
      
      <button onClick={calculateBMI}>Calculate BMI</button>

      <p>BMI: {bmi}</p>

      <h2>Interest Calculator</h2>
      <input placeholder="Principal" onChange={pChange} />
      <input placeholder="Rate" onChange={rChange} />
      <input placeholder="Time" onChange={tChange} /> 

       <button onClick={calculateInterest}>
        Calculate Interest
      </button>

      <p>Interest: {interest}</p>

      <h2>Area Calculator</h2>

      <input placeholder="Length" onChange={lengthChange} />
      <input placeholder="Width" onChange={widthChange} />
      <button onClick={calculateArea}>Calculate Area</button>

      <p>Area: {area}</p>
    </div>
  );
}

export default App;