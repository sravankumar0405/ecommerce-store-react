import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Products from './pages/Products/Products'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'
import Layout from './Components/layout/Layout'
import Register from './pages/Register/Register'




function App() {

  return (
    <>

      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
