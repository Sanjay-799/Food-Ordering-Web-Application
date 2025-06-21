import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PizzaCard from '../../components/pizza/pizzaCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/items')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
      });
  }, []);

  return (
    <div>
      <div className='row'>
        {products.map(item=>{
            return <div className="col-md-4">
                <div>
                    <PizzaCard item={item}/>
                </div>
            </div>
        })}

      </div>
    </div>
  );
};

export default HomePage;
