import React, { useState } from "react";
import './allItemsCart.css';

function AdminItemCart({ item }) {
    const [variant, setVariant] = useState(item.variants[0]?.size || "");
    const [quantity, setQuantity] = useState(1);

    const selectedVariant = item.variants.find(v => v.size === variant);
    const price = selectedVariant ? selectedVariant.price * quantity : 0;

    return (
        <div className="main-cart">
            <div className="item-image">
                <img 
                    src={selectedVariant?.image_url || item.variants[0]?.image_url} 
                    alt={item.name} 
                />
            </div>
            <div className="item-details">
                <h4>{item.name}</h4>

                <div className="selectors">
                    <label>Variant:</label>
                    <select value={variant} onChange={e => setVariant(e.target.value)}>
                        {item.variants.map((v, idx) => (
                            <option key={idx} value={v.size}>{v.size}</option>
                        ))}
                    </select>

                    <label>Quantity:</label>
                    <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
                        {[...Array(10).keys()].map(n => (
                            <option key={n+1} value={n+1}>{n+1}</option>
                        ))}
                    </select>
                </div>

                <p className="item-price">Price: ₹{price}</p>
            </div>
        </div>
    );
}

export default AdminItemCart;
