import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contacts from './pages/contacts'
import Header from './components/header'

function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/contacts' element={<Contacts />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
