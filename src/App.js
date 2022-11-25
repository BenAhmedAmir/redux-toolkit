import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
