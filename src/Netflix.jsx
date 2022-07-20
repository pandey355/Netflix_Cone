import React from 'react';
import Navbar from "./Navbar";
import Sdata from "./Sdata";
import Card from "./Card";
import "./index.css";
import Archive from "./imges/Archive.jpg";
import Extraction from "./imges/Extraction.jpg";
import lucifer from "./imges/lucifer.jpg";
import Thar from "./imges/Thar.jpg";
import Narchos from "./imges/Narchos.jpg";


 const Netflix = () => {
    return (
        <>
        <Navbar />
    
        <Card
          img={lucifer}
          disc="lucifer"
          title="lucifer Streaming Now"
          link="https://www.netflix.com/in/"
        />
    
        <Card
          img={Archive}
          disc={Sdata[0].disc}
          title={Sdata[0].title}
          link={Sdata[0].link}
        />
        <Card
          img={Extraction}
          disc={Sdata[1].disc}
          title={Sdata[1].title}
          link={Sdata[1].link}
        />
        <Card
          img={Thar}
          disc={Sdata[2].disc}
          title={Sdata[2].title}
          link={Sdata[2].link}
        />
        <Card
          img={Narchos}
          disc={Sdata[3].disc}
          title={Sdata[3].title}
          link={Sdata[3].link}
        />
    
        <Card
          img={Narchos}
          disc={Sdata[4].disc}
          title={Sdata[4].title}
          link= {Sdata[4].link}
        />
      </>

    )
}



export default Netflix ;
