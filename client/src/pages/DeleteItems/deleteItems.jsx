import React, { useState } from "react";
import './deleteItems.css';

function DeleteItems() {
    const [items, setItems] = useState({
        name: '',
        size: ''
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

        if (!items.name || !items.size) {
            alert("Please fill in all fields.");
            return;
        }

        fetch('http://localhost:3000/admin/deleteitem', {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(items)
        })
            .then(res => res.json())
            .then(data => {
                alert("Item deleted successfully!");
                console.log(data);

                setItems({
                    name: '',
                    size: ''
                });
            })
            .catch(err => {
                console.error("Error:", err);
                alert("Something went wrong!");
            });
    }

    return (
        <div className="additem-container">
            <h2 className="additem-title">Delete Item</h2>
            <form className="additem-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={items.name}
                        onChange={handleInput}
                        placeholder="Item Name"
                    />
                </div>
                <div className="form-group">
                    <label>Size</label>
                    <input
                        type="text"
                        name="size"
                        value={items.size}
                        onChange={handleInput}
                        placeholder="Small / Medium / Large"
                    />
                </div>
                <button type="submit" className="submit-btn">Delete Item</button>
            </form>
        </div>
    );
}

export default DeleteItems;
