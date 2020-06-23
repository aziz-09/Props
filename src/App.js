import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from "./ProductTable"




const products = [
   {category : 'clothes' , price: "2222" ,name :"hello" ,oooo:"xxxx"},
  {category:'Electronics' ,price: "5555" ,name:'med',oooo:"xxxx"},
 
 
  ]
  

 
function App() {
  return (
    <div className="App">
      <ProductTable x={products}/>
      

    </div>
  );
}

export default App;
