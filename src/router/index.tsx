import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home'
import { ProductList } from '../components/ProductList'

export const RouteWrapper = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/list' element={<ProductList/>}/>
   </Routes>
  )
}
