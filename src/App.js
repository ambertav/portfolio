import './App.css';
import { Routes, Route } from 'react-router';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import About from './pages/About';

import data from './data';


function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About data={data} />} />
          <Route path='/projects' element={<Projects projects={data.projects} />} />
          <Route path='/resume' element={<Resume />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
