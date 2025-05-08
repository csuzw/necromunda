/* eslint-disable import/no-webpack-loader-syntax */
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Gang from './pages/Gang';
import Fighters from './pages/Fighters';
import Tactics from './pages/Tactics';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/gang" element={<Gang />} />
          <Route path="/fighters" element={<Fighters />} />
          <Route path="/tactics" element={<Tactics />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
