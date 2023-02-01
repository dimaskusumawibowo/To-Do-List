import { useState,useEffect } from "react"

const Hitung = () => {

    const [products, setProducts] = useState([

        { id: 1, nama_products: "Kecap", harga: 3000 },
        { id: 2, nama_products: "Kecap", harga: 3000 },
        { id: 3, nama_products: "Kecap", harga: 3000 },
        { id: 4, nama_products: "Kecap", harga: 3000 },
        { id: 5, nama_products: "Kecap", harga: 3000 },
        { id: 6, nama_products: "Kecap", harga: 3000 },
        { id: 7, nama_products: "Kecap", harga: 3000 },
        { id: 8, nama_products: "Kecap", harga: 3000 },
        { id: 9, nama_products: "Kecap", harga: 3000 },
        { id: 10, nama_products: "Kecap", harga: 3000 }
    ])

    const deleteProducts = (productId) => {
        const newProducts = products.filter (product => product.id !== productId)
        setProducts(newProducts)
    }

    const [nama,setNama] = useState('Dimas');


    useEffect(()=> {
        console.log("Running");
    },[nama])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th> No </th>
                        <th> Nama </th>
                        <th> Harga </th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product,index) => (
                        <tr key={product.id}>
                            <td>{index +1}</td>
                            <td>{product.nama_products}</td>
                            <td>{product.harga}</td>
                            <td><button onClick={()=> deleteProducts(product.id)}> Delete Product</button></td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
            <h2> Nama Saya: {nama}</h2>
            <button onClick={ () => setNama('Haikal')}> Ganti Nama </button>
        </div>
    )
}

export default Hitung