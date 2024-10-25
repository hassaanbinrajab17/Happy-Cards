
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Hero from './Components/Hero'
import DashBoard from './Components/DashBoard';
import CardMaker from './Components/CardMaker'
import Footer from './Components/Footer'
import './index.css'

function App() {

  return (
    <>
   <Router>
    <Routes>
    <Route path='/' element={<Hero/>}/>
    <Route path='/Dashboard' element={<DashBoard/>}/>
    <Route path='/CardMaker' element={<CardMaker/>}/>
    </Routes>
    </Router>    
<Footer/>

    </>
  )      
}

export default App
