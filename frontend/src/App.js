import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navi from './Pages/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Movies from './Pages/Movies';
import Admin from './Pages/Admin';

function App() {
  return (
    <div className="App">
      <header>
        <Navi/>
      </header>
      <body>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Movies" element={<Movies />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} ></Route>
        </Routes>
      </BrowserRouter>
      </body>
    </div>
  );
}

export default App;