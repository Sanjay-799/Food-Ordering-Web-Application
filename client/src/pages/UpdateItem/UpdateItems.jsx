import React, { useState } from "react";
import './UpdateItems.css';

function UpdateItemPage() {
    const [items, setItems] = useState({
        name: '',
        size: '',
        quantity: '',
        price: ''
    });

    function handleInput(e) {
        const { name, value } = e.target;
        setItems(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:3000/admin/updateitems', {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(items)
        })
            .then(res => res.json())
            .then(data => {
                alert("Item updated successfully!");
                console.log(data);
                setItems({
                    name: '',
                    size: '',
                    quantity: '',
                    price: ''
                });
            })
            .catch(err => {
                console.error("Error:", err);
                alert("Something went wrong!");
            });
    }

    return (
        <div className="additem-container">
            <h2 className="additem-title">Update Item</h2>
            <form className="additem-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={items.name} onChange={handleInput} placeholder="Item Name" />
                </div>
                <div className="form-group">
                    <label>Size</label>
                    <input type="text" name="size" value={items.size} onChange={handleInput} placeholder="Small / Medium / Large" />
                </div>
                <div className="form-group">
                    <label>Quantity</label>
                    <input type="number" name="quantity" value={items.quantity} onChange={handleInput} placeholder="Enter quantity" />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" name="price" value={items.price} onChange={handleInput} placeholder="Enter price" />
                </div>

                <button type="submit" className="submit-btn">Update Item</button>
            </form>
        </div>
    );
}

export default UpdateItemPage;
