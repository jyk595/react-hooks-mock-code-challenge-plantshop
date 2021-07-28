import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantListData, setPlantListData] = useState([]);
  const [formData, setFormData] = useState({
    "name": "",
    "image": "",
    "price": "",
  });
  const [searchValue, setSearchValue] = useState("");

  useEffect(()=>{
    fetch(`http://localhost:6001/plants`)
    .then(res=>res.json())
    .then(setPlantListData)
  },[]);

  function updatedArray(newItem) {
    const combinedArray = [...plantListData, newItem]
    setPlantListData(combinedArray);
  }

  const searchFilterArray = plantListData.filter(singlePlant => {
    if (searchValue === "") {
      return true;
    } else if (searchValue.toLowerCase().includes(searchValue.toLowerCase()) === singlePlant.name.toLowerCase().includes(searchValue.toLowerCase())) {
      return true
    } else {
      return false
    }
  })

  return (
    <main>
      <NewPlantForm 
        formData={formData} 
        setFormData={setFormData} 
        updatedArray={updatedArray} 
      />
      <Search 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
      />
      <PlantList searchFilterArray={searchFilterArray} />
    </main>
  );
}

export default PlantPage;
