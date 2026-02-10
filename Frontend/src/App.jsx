import React from "react";
export default function App(){
  async function getData() {
    const response =  await fetch('http://localhost/data')
  }
}