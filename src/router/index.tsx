import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home'
import { List } from '../pages/list'

export const RouteWrapper = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/list' element={<List/>}/>
   </Routes>
  )
}
