import React from "react"
import Sdata1 from "./Sdata1";
import Card from "./Cards";

const Amazone = () => {
  
      
              return (
            <Card
            key={Sdata1[3].id}
            imgsrc={Sdata1[3].imgscr}
            title={Sdata1[3].title}
            sname={Sdata1[3].sname}
            link={Sdata1[3].links}
            />
              );
          
            }
       
    


export default Amazone;