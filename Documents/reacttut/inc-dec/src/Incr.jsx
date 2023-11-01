import React, { useState } from "react";

const Incr = () => {

    const [num, setNum ] = useState(0)

    const incNum = () => {
        setNum(num+1)
    }

    const decNum = () => {
        if(num > 0 ){
        setNum(num-1)
    }else{
        alert('Sorry, Zero Limit Reached ')
        setNum(0)
    }
    };


    return(
        <>

<div>
    <div className='main_div'>
    <div className='center_div'>
    <h1> {num} </h1>
    <div className='btn_div'>
    <button onClick={incNum}>Increm</button>
    <button onClick={decNum}>Dcrem</button>
    </div>
    </div>
    </div>
    </div>

      </> 
    );
};

export default Incr;