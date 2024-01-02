import {BrowserRouter, Routes, Route} from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer.jsx"
import { ItemDetailsContainer } from "./components/ItemDetailsContainer.jsx"
import { Cart } from "./components/Cart.jsx"
import "./App.css"
import { CartProvider } from  "./contexts/CartContext.jsx"

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:id" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailsContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<>Error de la NASA</>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>

  )
}

export default App
