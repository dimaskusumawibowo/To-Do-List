import React from 'react'
import Hitung from './pages/Hitung'

const Home = () => {
  return (
    <div style={{ padding: '5px', fontFamily: 'monospace'}}>
        <header>
            <h2>Aplikasi Penghitung Pengunjung jumlah Mall Sun Plaza Medan</h2>
            <p> Menggunakan React Hooks </p>
        </header>
        <hr/>
        <Hitung/>
        <hr/>
        <footer>
            <h2> Create by Dimas Kusuma Wibowo</h2>
        </footer>
    </div>
  )
}

export default Home