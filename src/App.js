import { BrowserRouter,Routes, Route} from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Attorneys from "./Components/Attorneys/Attorneys";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Area from "./Components/PracticesArea/Area"

function App() {
  return (
   <div>
      <BrowserRouter>
          <Nav/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Attorneys" element={<Attorneys/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Area" element={<Area/>}/>
              <Route path="/Contact" element={<Contact/>}/> 
          </Routes>

      </BrowserRouter>
   </div>
  );
}

export default App;