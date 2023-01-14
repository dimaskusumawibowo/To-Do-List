import { useState,useEffect } from "react"
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const MahasiswaList = () => {
    const [mahasiswa,SetMahasiswa] = useState([]);


    useEffect(()=> {
        fetchData();

    },[])

    const fetchData = async() => {
        const response = await fetch('http://localhost:8080/mahasiswa');
        const data = await response.json();
        SetMahasiswa(data)
    }

    const deleteProduct = async(id) => {
        await fetch(`http://localhost:8080/mahasiswa/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        fetchData();
    }

  return (
    <div>
        <Navbar/>
        <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nim Mahasiswa</th>
                    <th>Nama Mahasiswa</th>
                    <th>Alamat</th>
                    <th>Jurusan Mahasiswa</th>
                    <th>Jumlah Uang</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {mahasiswa.map((mahasiswas,index) => (
                    <tr key={mahasiswas.id}>
                        <td>{index +1}</td>
                        <td>{mahasiswas.nim}</td>
                        <td>{mahasiswas.nama_mhs}</td>
                        <td>{mahasiswas.alamat_mhs}</td>
                        <td>{mahasiswas.jurusan_mhs}</td>
                        <td>{mahasiswas.jumlah_uang}</td>
                        <td>
                            <Link to={`/editmahasiswa/${mahasiswas.id}`} className="button is-info is-small mx-1"> Edit Data </Link>
                            <button onClick={() => deleteProduct(mahasiswas.id) } className="button is-danger is-small"> Hapus Data </button>
                        </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
        <Link to={`/addmahasiswa`} className="button is-primary mt-6"> Tambah Data </Link>
    </div>
  )
}

export default MahasiswaList