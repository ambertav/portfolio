import './App.css';
import { Routes, Route } from 'react-router';

import Navigation from './components/Navigation';
import Projects from './pages/Projects';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
          <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
