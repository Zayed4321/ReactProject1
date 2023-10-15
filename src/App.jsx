import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import HOME from "./Pages/HOME";
import BLOG from "./Pages/BLOG";
import CONTACT from "./Pages/CONTACT";
import Navbar from "./components/Navbar";
import ERROR from "./Pages/ERROR";
import SPECIFICBLOG from "./Pages/SPECIFICBLOG";


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HOME />} />
          <Route path="/blog" element={<BLOG />} />
          <Route path="/blog/:id" element={<SPECIFICBLOG />} />
          <Route path="/contact" element={<CONTACT />} />
          <Route path="*" element={<ERROR />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
