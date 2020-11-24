import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';

export default function HomeScreen() {
    const [products, setProducts] = useState([]);

    //Send a request to backend to fetch product data
    useEffect(() => {
        const fetchData = async() => {
            const { data } = await axios.get('/api/products');
            setProducts(data);
        }
        fetchData();
    }, [])
    return (
        <div className='row center'>
            {products.map(product => (
                <Product key={product._id} product={product} />
            ))}
        </div>
    )
}
