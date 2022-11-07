import './App.css';
import { Routes, Route} from 'react-router-dom';

import {Profile} from './components/Profile'
import {Contact} from './components/Contact'


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </div>
  );
}

export default App;
