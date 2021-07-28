import React from "react";

function NewPlantForm({ formData, setFormData }) {
  const {name, image, price} = formData;

  function formOnChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function formOnSubmit(event) {
    event.preventDefault();

    const newPlant = {
      name: event.name,
      image: event.image,
      price: event.price,
    }


  }

  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={formOnChange} />
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={formOnChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={formOnChange} />
        <button type="submit" onClick={formOnSubmit}>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
