import { useState } from "react";

function PlantCard({ individualPlant }) {
  const {image = "https://via.placeholder.com/400", name, price, id} = individualPlant;
  const [inStock, setInStock] = useState(true);

  function stockButtonClick() {
    setInStock(inStock => !inStock);
  }


  return (
    <li className="card" key={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={stockButtonClick}>In Stock</button>
      ) : (
        <button onClick={stockButtonClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
