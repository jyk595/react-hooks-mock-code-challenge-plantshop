import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantListData, setPlantListData] = useState([]);
  const [formData, setFormData] =useState({
    "name": "",
    "image": "",
    "price": "",
  })

  useEffect(()=>{
    fetch(`http://localhost:6001/plants`)
    .then(res=>res.json())
    .then(setPlantListData)
  },[]);

  function updatedArray(newItem) {
    const combinedArray = [...plantListData, newItem]
    setPlantListData(combinedArray);
  }

  return (
    <main>
      <NewPlantForm formData={formData} setFormData={setFormData} updatedArray={updatedArray} />
      <Search />
      <PlantList plantListData={plantListData} />
    </main>
  );
}

export default PlantPage;
