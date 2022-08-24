import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'

export const AppRoutes = () => {
  <BrowserRouter>
      <Route path='dashboard' element={<Dashboard/>}/>
    <Routes>
    </Routes>
  </BrowserRouter>
}