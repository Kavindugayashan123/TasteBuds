import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Outlet from "./pages/Outlet";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Wish from "./pages/Wish";
import Cart from "./pages/Cart";
import OutletScreen from "./pages/OutletScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/outlet/:_id' element={ <OutletScreen />}/>
          <Route path='/login' element={ <Login />}/>
          <Route path='/wish' element={ <Wish />}/>
          <Route path='/cart' element={ <Cart />}/>
          <Route path='/outlet' element={ <Outlet />}/>
          <Route path='/about' element={ <About />}/>
          <Route path='/contact' element={ <Contact />}/>
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
