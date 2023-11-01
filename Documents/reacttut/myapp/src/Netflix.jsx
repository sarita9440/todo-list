import React from "react"
import Sdata1 from "./Sdata1";
import Card from "./Cards";

const Netflix = () => {
  
      
              return (
            <Card
            key={Sdata1[1].id}
            imgsrc={Sdata1[1].imgscr}
            title={Sdata1[1].title}
            sname={Sdata1[1].sname}
            link={Sdata1[1].links}
            />
              );
          
            }
       
    


export default Netflix;

