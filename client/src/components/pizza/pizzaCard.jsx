import React, { useState } from "react";
import "./PizzaCard.css";

function PizzaCard({ item }) {
    const [variant, setVariant] = useState(item.variants[0]?.size || "");
    const [quantity, setQuantity] = useState(1);

    const selectedVariant = item.variants.find(v => v.size === variant);
    const price = selectedVariant ? selectedVariant.price * quantity : 0;

    return (


        <div className="pizza-card">
            <h3 className="item-name">{item.name}</h3>
            <img src={selectedVariant?.image_url || item.variants[0]?.image_url} alt={item.name} className="item-image" />
            <div className="selectors">
                <div>
                    <label htmlFor="variant">Varients</label>
                    <select value={variant} onChange={e => setVariant(e.target.value)}>
                        {item.variants.map((v, i) => (
                            <option key={i} value={v.size}>{v.size}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="quantity">Quantity</label>
                    <select value={quantity} onChange={e => setQuantity(e.target.value)}>
                        {[...Array(10).keys()].map(n => (
                            <option key={n + 1} value={n + 1}>{n + 1}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="price-cart">
                <p className="item-price">Price: {price} Rs/-</p>
                <button className="item-btn">Add To Cart</button>
            </div>
        </div>


    );
}

export default PizzaCard;
