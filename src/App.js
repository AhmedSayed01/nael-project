import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
// import Work from './pages/Work/Work';
// import Clients from './pages/Clients/Clients';
import Contact from './pages/Contact/Contact';
import Navbar from './shared/navbar/Navbar';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/work' element={<Work />} /> */}
        {/* <Route path='/clients' element={<Clients />} /> */}
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
