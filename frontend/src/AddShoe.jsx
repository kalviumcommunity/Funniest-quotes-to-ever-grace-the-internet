import { useState } from "react";

const AddShoe = () => {
    const [formData, setFormData] = useState({ name: "", size: "", price: "" });
    const [message, setMessage] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const response = await fetch("http://localhost:8080/post", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage("Shoe added successfully!");
                setFormData({ name: "", size: "", price: "" }); // Reset form
            } else {
                setMessage("Error adding shoe.");
            }
        } catch (error) {
            setMessage("Server error. Try again later.");
        }
    };

    return (
        <div style={{ width: "300px", margin: "20px auto", textAlign: "center" }}>
            <h2>Add Shoe</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Shoe Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="size"
                    placeholder="Size"
                    value={formData.size}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddShoe;