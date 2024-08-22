import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'
import MovieList from './components/MovieList'
import CompanyInfo from './components/CompanyInfo'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListOfMovies from './components/ListOfMovies'

function App() {
  
  return (
   <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<SignUp/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/movielist' element={<MovieList/>}></Route>
          <Route path="/company-info" element={<CompanyInfo/>} ></Route>
          <Route path='/list-of-movies' element={<ListOfMovies/>}></Route>
        </Routes>
      </BrowserRouter>
   </div>  
  )
}

export default App
