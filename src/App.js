import './App.css';
import { Routes, Route } from 'react-router';

import Navigation from './components/Navigation';
import Projects from './pages/Projects';
import Resume from './pages/Resume';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
