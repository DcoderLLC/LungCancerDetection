import { Box } from '@mui/material'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Team from './Pages/Team';
import About from "./Pages/About"
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <Box>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  )
}

export default App
