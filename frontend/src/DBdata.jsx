import { useEffect, useState } from "react";

const DBdata = () => {
    const [shoes, setShoes] = useState([]);

    // Fetch data from backend
    useEffect(() => {
        fetch("http://localhost:8080/get")
            .then(response => response.json())
            .then(data => setShoes(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    // Handle Update
    const handleUpdate = async (id) => {
        const newName = prompt("Enter new shoe name:");
        const newSize = prompt("Enter new shoe size:");
        const newPrice = prompt("Enter new shoe price:");

        if (!newName || !newSize || !newPrice) {
            alert("All fields are required!");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/put/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: newName, size: Number(newSize), price: Number(newPrice) })
            });

            if (response.ok) {
                setShoes(shoes.map(shoe => shoe._id === id ? { ...shoe, name: newName, size: newSize, price: newPrice } : shoe));
                alert("Shoe updated successfully!");
            } else {
                alert("Failed to update shoe.");
            }
        } catch (error) {
            console.error("Error updating shoe:", error);
        }
    };

    // Handle Delete
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/delete/${id}`, { method: "DELETE" });

            if (response.ok) {
                setShoes(shoes.filter(shoe => shoe._id !== id));
                alert("Shoe deleted successfully!");
            } else {
                alert("Failed to delete shoe.");
            }
        } catch (error) {
            console.error("Error deleting shoe:", error);
        }
    };

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {shoes.map((shoe) => (
                <div key={shoe._id} style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "8px",
                    width: "200px",
                    textAlign: "center"
                }}>
                    <h3>{shoe.name}</h3>
                    <p>Size: {shoe.size}</p>
                    <p>Price: ${shoe.price}</p>
                    <button onClick={() => handleUpdate(shoe._id)} style={{ margin: "5px" }}>Update</button>
                    <button onClick={() => handleDelete(shoe._id)} style={{ margin: "5px", backgroundColor: "red", color: "white" }}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default DBdata;