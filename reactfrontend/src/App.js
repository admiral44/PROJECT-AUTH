import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/page/Home';
import Navbar from './component/Navbar';
import Notfound from './component/page/Notfound';
import Login from './component/page/Login';
import Registartion from './component/page/Registartion';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>

          <Route path='/' element={ <Home /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/registartion' element={ <Registartion /> } />

          <Route path='*' element={ <Notfound /> } />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
