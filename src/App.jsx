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
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/notfound' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
