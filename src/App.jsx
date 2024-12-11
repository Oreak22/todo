import { Route, Routes } from 'react-router-dom'
import Home from './pagies/Home'
import Signin from './pagies/Signin'
import 'bootstrap/dist/css/bootstrap.css'
import Login from './pagies/Login'
import TokenCheck from './securety/TokenCheck'

function App() {

  return (
    <>
      {/* <TokenCheck /> */}
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/to-do" element={<Home />} />
        <Route path="/todo" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
