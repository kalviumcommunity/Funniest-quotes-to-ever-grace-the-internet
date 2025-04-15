import React from "react";

const uglyShoes = [
  {
    id: 1,
    celebrity: "Kanye West",
    shoeName: "Foam Runner Nightmare",
    image: "https://i.pinimg.com/originals/b5/6f/a6/b56fa6977918c2020a54c9b79482c3bd.png",
    rating: 2.1,
    description: "A futuristic, foam-crafted shoe that looks straight out of an alien spaceship.",
  },
  {
    id: 2,
    celebrity: "Lady Gaga",
    shoeName: "Platform Disaster",
    image: "https://theawesomedaily.com/wp-content/uploads/2016/10/weird-shoes-feat-1.jpg",
    rating: 1.5,
    description: "Sky-high platform heels that defy physics and good fashion sense.",
  },
  {
    id: 3,
    celebrity: "Justin Bieber",
    shoeName: "Oversized Crocs",
    image: "https://awesomestuff365.com/wp-content/uploads/2017/08/Fish-Shoes.jpg",
    rating: 3.0,
    description: "Crocs, but make them 10x bigger — and somehow worse.",
  },
  {
    id: 4,
    celebrity: "Rihanna",
    shoeName: "Fluffy Heel Disaster",
    image: "https://aubtu.biz/images/6s/2023/03/30-Weird-And-Funny-Looking-Shoes-That-Have-Hit-The-Market-3.jpg",
    rating: 2.8,
    description: "A fuzzy high heel that looks more like a slipper gone wrong.",
  },
];

const UglyShoeList = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Celebrity Shoe Fails</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {uglyShoes.map((shoe) => (
          <div key={shoe.id} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
            padding: "15px",
            width: "250px",
            backgroundColor: "#fff",
          }}>
            <img src={shoe.image} alt={shoe.shoeName} style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px"
            }} />
            <h3 style={{ fontSize: "18px", margin: "10px 0" }}>{shoe.shoeName}</h3>
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>👟 Celebrity: {shoe.celebrity}</p>
            <p style={{ fontSize: "14px", color: "#555" }}>{shoe.description}</p>
            <p style={{ fontSize: "16px", fontWeight: "bold", color: "#e63946" }}>⭐ Rating: {shoe.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UglyShoeList;