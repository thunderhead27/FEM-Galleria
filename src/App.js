import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Slideshow from "./pages/Slideshow";
import Slide from "./components/Slide";

function App() {
  const [slideshow, setSlideshow] = useState(false);
  const [location, setLocation] = useState("");

  console.log(location);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          setSlideshow={setSlideshow}
          slideshow={slideshow}
          location={location}
        />
        <Routes>
          <Route path="/" element={<Home setLocation={setLocation} />} />
          <Route
            path="slideshow"
            element={
              <Slideshow slideshow={slideshow} setLocation={setLocation} />
            }
          >
            <Route path=":slideId" element={<Slide slideshow={slideshow} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
