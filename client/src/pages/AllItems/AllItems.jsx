import React, { useState, useEffect } from "react";
import './Allitems.css';
import axios from 'axios';
import AdminItemCart from "../../components/adminItems/allItemsCart";


function AllItemsPage() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/admin/allitems')
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

                setItems(Object.values(grouped));
            })
            .catch(err => {
                console.error('Error fetching products:', err);
            });
    }, []);



    return (
        <>
        <div className='home-body container'>
            <div className="row justify-content-center">
                {items.map((item, index) => (
                    <div className="col-md-3 col-12 d-flex justify-content-start mb-3" key={index}>
                        <AdminItemCart item={item} />
                    </div>
                ))}
            </div>
        </div>
        

        </>
    )
}

export default AllItemsPage