import './App.css';
import { Routes, Route } from 'react-router';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectInfo from './pages/ProjectInfo';
import Contact from './pages/Contact';

import data from './data';


function App() {
  return (
    <div className="App">
      <Navigation />
      <main className='pt-20 md:pt-8 lg:pt-20'>
      <Routes>
          <Route path='/' element={<About data={data} />} />
          <Route path='/projects' element={<Projects projects={data.projects} />} />
          <Route path='/projects/:name' element={<ProjectInfo />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
