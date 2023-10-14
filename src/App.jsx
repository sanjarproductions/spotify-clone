import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import Playlist from './routes/playlist/Playlist';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/playlist' element={<Playlist/>}/>
      </Routes>
    </>
  );
}

export default App;
