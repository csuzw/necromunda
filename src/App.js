/* eslint-disable import/no-webpack-loader-syntax */
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Gang from './pages/Gang';
import Fighters from './pages/Fighters';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/necromunda/gang" element={<Gang />} />
          <Route path="/necromunda/fighters" element={<Fighters />} />
          <Route path="/necromunda" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
