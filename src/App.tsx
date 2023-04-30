import './App.scss'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import CityViewPage from './pages/CityViewPage/CityViewPage'
import CityListPage from './pages/CityListPage/CityListPage';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/cities'/>}></Route>
        <Route path='/cities' element={<CityListPage/>}></Route>
        <Route path='/cities/:name' element={<CityViewPage/>}></Route>
      </Routes>
    </Router>  

  )
}

export default App
