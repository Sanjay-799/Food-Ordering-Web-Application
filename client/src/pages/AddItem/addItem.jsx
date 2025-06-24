import React, { useState } from "react";
import './addItem.css';

function AddItems() {
    const [items, setItems] = useState({
        name: '',
        size: '',
        quantity: '',
        price: '',
        image_url: ''
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

        if (!items.name || !items.size || !items.quantity || !items.price || !items.image_url) {
            alert("Please fill in all fields.");
            return;
        }

        fetch('http://localhost:3000/admin/additem', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(items)
        })
            .then(res => res.json())
            .then(data => {
                alert("Item added successfully!");
                console.log(data);

                setItems({
                    name: '',
                    size: '',
                    quantity: '',
                    price: '',
                    image_url: ''
                });
            })
            .catch(err => {
                console.error("Error:", err);
                alert("Something went wrong!");
            });
    }

    return (
        <div className="additem-container">
            <h2 className="additem-title">Add New Item</h2>
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
                <div className="form-group">
                    <label>Image URL</label>
                    <input type="text" name="image_url" value={items.image_url} onChange={handleInput} placeholder="Enter image URL" />
                </div>
                <button type="submit" className="submit-btn">Add Item</button>
            </form>
        </div>
    );
}

export default AddItems;
