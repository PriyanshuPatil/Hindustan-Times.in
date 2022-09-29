import React from "react";

export default function Dateis() {
  const current = new Date();
  
  const date =new Date().toLocaleString('en-us',{weekday:"long",month:'short', year:'numeric', day:'numeric'});
//   Thursday, Sep 29, 2022
  return (
    <div className="App">
      <h1 >{date}</h1>
    </div>
  );
}