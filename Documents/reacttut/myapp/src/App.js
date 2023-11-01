import React from "react"
import "./App.css"
import SlotMach from "./SlotMach";

const SlotM = (props) => {

  let {x, y, z} = props;

  if( x === y && y === z){
    return(
<div>

<div className="slot_inner">
<h1> {x} {y} {z}</h1>
<h1> This is matching.</h1>
<hr/>
</div>

</div>
    );
  
}
else
{
  return(
    <div>
    
    <div className="slot_inner">
    <h1> {x} {y} {z}</h1>
    <h1> This is not matching.</h1>
    <hr/>
    </div>
    
    </div>
        );
  }
  };


const App = () => {
  return (

   <div>

  <h1 className="heading_style" >📺Welcome to <span style={{fontWeight: "bold", alignItems:"center"}} >Slot machine game📺</span></h1>
  <div className="slotmachine">
  <SlotM x='😀' y ='😀' z ='🎅' />
  <hr/>
  <SlotM x='😎' y ='🤣' z ='😎'/>
  <hr/>
  <SlotM x='🥱' y ='🤑' z ='😲' />
  <hr/>
  <SlotM x='🤑' y ='🤑' z ='🤑' />
  <hr/>
  <SlotM x='🤑' y ='🤑' z ='🤑' />

  </div>
  </div>
);

};
export default App;

