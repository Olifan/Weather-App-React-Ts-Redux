import './App.scss'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CityViewPage from './pages/CityViewPage/CityViewPage'
import CityListPage from './pages/CityListPage/CityListPage';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<CityListPage/>}></Route>
        <Route path='/cities/:name' element={<CityViewPage/>}></Route>
      </Routes>
    </Router>  

  )
}

export default App
