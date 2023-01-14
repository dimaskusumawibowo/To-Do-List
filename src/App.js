import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MahasiswaList from './components/MahasiswaList';
import About from './components/About'
import Navbar from './components/Navbar';
import AddMahasiswa from './components/AddMahasiswa';
import EditMahasiswa from './components/EditMahasiswa'


function App() {
  return (
    <div className='container' style={{ fontFamily: 'sans-serif' }}>
      <Router>
        <Routes>
          <Route path='/' element={<MahasiswaList />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Navbar' element={<Navbar />}></Route>
          <Route path='/AddMahasiswa' element={<AddMahasiswa />}></Route>
          <Route path='/EditMahasiswa/:id' element={<EditMahasiswa />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
