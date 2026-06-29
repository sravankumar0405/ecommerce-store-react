import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Products from './pages/Products/Products'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/NotFound' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
