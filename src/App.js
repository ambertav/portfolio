import './App.css';
import { Routes, Route } from 'react-router';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import About from './pages/About';

import data from './data';


function App() {
  return (
    <div className="App">
      <Navigation />
      <main className='pt-20 md:pt-8 lg:pt-20'>
      <Routes>
          <Route path='/' element={<About data={data} />} />
          <Route path='/projects' element={<Projects projects={data.projects} />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
