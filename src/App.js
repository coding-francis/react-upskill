import { BrowserRouter,Routes, Route} from "react-router-dom";
import 'antd/dist/reset.css';
import Home from "./components/home";
import Attorneys from "./components/attorney";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Attorneys" element={<Attorneys/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Contact" element={<Contact/>}/> 
          </Routes>
      </BrowserRouter>
  );
}

export default App;