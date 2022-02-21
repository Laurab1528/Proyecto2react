//1)necesitamos la variable react en scope
import React from "react"
// Necesitamos la variable ReactDom en scope
import ReactDOM from "react-dom"
// Necesitamos un componente en scope
//function App(){
   // return "hola mundo"
//}

import NavBar from "./Components/NavBar"
//Necesitamos poner el componente en el DOM
ReactDOM.render(<NavBar/>,document.getElementById("root"))