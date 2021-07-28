import React from "react";

function NewPlantForm({ formData, setFormData, updatedArray }) {
  function formOnChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function formOnSubmit(event) {
    event.preventDefault();

    const newPlant = {
      name: event.target.name.value,
      image: event.target.image.value,
      price: event.target.price.value,
    }

    updatedArray(newPlant);

    setFormData({
      "name": "",
      "image": "",
      "price": "",
    })
  }

  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={formOnSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={formOnChange} />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={formOnChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={formOnChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
