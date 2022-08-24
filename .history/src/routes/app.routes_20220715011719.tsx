import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { List } from '../pages/List'

export const AppRoutes = () => {
  <BrowserRouter>
    <Routes>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='list/:type' element={<List/>}/>
    </Routes>
  </BrowserRouter>
}