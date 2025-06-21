import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PizzaCard from '../../components/pizza/pizzaCard';
import './Home.css';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/items')
            .then(res => {
                const grouped = {};
                res.data.forEach(p => {
                    if (!grouped[p.name]) {
                        grouped[p.name] = {
                            name: p.name,
                            variants: []
                        };
                    }
                    grouped[p.name].variants.push({
                        size: p.size,
                        price: p.price,
                        image_url: p.image_url
                    });
                });

                setProducts(Object.values(grouped));
            })
            .catch(err => {
                console.error('Error fetching products:', err);
            });
    }, []);

    return (
        <div className='home-body container'>
            <div className="row justify-content-center">
                {products.map((item, index) => (
                    <div className="col-md-3 col-12 d-flex justify-content-center mb-3" key={index}>
                        <PizzaCard item={item} />
                    </div>
                ))}
            </div>
        </div>



    );
};

export default HomePage;
