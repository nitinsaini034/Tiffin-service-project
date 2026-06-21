import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import LogIn from './components/user/LogIn'
import SignUp from './components/user/SignUp'

function App() {

  return (
    <>
     <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>

       </Routes>
     
     </BrowserRouter>
      
      
    </>
  )
}

export default App
