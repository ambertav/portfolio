import './App.css';
import { Routes, Route } from 'react-router';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import About from './pages/About';

import data from './data';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
          <Route path='/' element={<About data={data} />} />
          <Route path='/projects' element={<Projects projects={data.projects} />} />
          <Route path='/resume' element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
