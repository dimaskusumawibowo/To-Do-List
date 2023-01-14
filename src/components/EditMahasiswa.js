import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"

const EditMahasiswa = () => {

    const [nim, setNim] = useState('');
    const [nama_mhs, setNama] = useState('');
    const [alamat_mhs, setAlamat] = useState('');
    const [jumlah_uang, setJumlahUang] = useState('');
    const [jurusan_mhs, setJurusan] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getMahasiswaById();
    }, []);

    const getMahasiswaById = async () => {
        const response = await fetch(`http://localhost:8080/mahasiswa/${id}`)
        const data = await response.json();
        setNim(data.nim);
        setNama(data.nama_mhs);
        setAlamat(data.alamat_mhs);
        setJumlahUang(data.jumlah_uang);
        setJurusan(data.jurusan_mhs);
    }

    const updateMahasiswa = async (e) => {
        e.preventDefault();
        const mahasiswa = { nim, nama_mhs, alamat_mhs, jumlah_uang, jurusan_mhs };

        await fetch(`http://localhost:8080/mahasiswa/${id}`, {
            method: 'PUT',
            body: JSON.stringify(mahasiswa),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        navigate('/')
    }

    return (

        <div className="container">
            <div>
                <h1 style={{ marginTop: '20px', marginBottom: '1px' }}><center><strong>Daftar Penerima Bantuan Beasiswa<br />Institut Teknologi Medan</strong></center></h1>
            </div>

            <form onSubmit={updateMahasiswa}>
                <div className="field mt-6">
                    <label className="label is-small"> Nim Mahasiswa </label>
                    <div className="control">
                        <input className="input is-small" value={nim} onChange={(e) => setNim(e.target.value)} type="text" placeholder="Nim Mahasiswa" />
                    </div>
                </div>

                <div className="field">
                    <label className="label is-small"> Nama Mahasiswa </label>
                    <div className="control">
                        <input className="input is-small" value={nama_mhs} onChange={(e) => setNama(e.target.value)} type="text" placeholder="Nama Mahasiswa" />
                    </div>
                </div>

                <div className="field">
                    <label className="label is-small"> Alamat Mahasiswa </label>
                    <div className="control">
                        <input className="input is-small" value={alamat_mhs} onChange={(e) => setAlamat(e.target.value)} type="text" placeholder="Alamat Mahasiswa" />
                    </div>
                </div>

                <div className="field">
                    <label className="label is-small"> Jumlah Uang </label>
                    <div className="control">
                        <input className="input is-small" value={jumlah_uang} onChange={(e) => setJurusan(e.target.value)} type="number" placeholder="Jurusan Mahasiswa" />
                    </div>
                </div>

                <div className="field">
                    <label className="label is-small"> Jurusan Mahasiswa </label>
                    <div className="control">
                        <input className="input is-small" value={jurusan_mhs} onChange={(e) => setJumlahUang(e.target.value)} type="text" placeholder="Jumlah Uang Beasiswa" />
                    </div>
                </div>

                <div className="field">
                    <label className="label is-small"></label>
                    <div className="control">
                        <button className="button is-info"> Update Data </button>
                    </div>
                </div>
            </form>

        </div>

    );
};

export default EditMahasiswa;
