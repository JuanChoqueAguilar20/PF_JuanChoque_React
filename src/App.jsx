import {BrowserRouter, Routes, Route} from "react-router-dom"

import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer.jsx"
import { ItemDetailsContainer } from "./components/ItemDetailsContainer.jsx"

import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:id" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailsContainer/>}/>
      <Route path="*" element={<>Error de la NASA</>}/>
    </Routes>
    </BrowserRouter>

  )
  
}

export default App
