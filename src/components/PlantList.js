import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantListData }) {
  const renderPlantList = plantListData.map(individualPlant => {
    return <PlantCard individualPlant={individualPlant} />
  })
  return (
    <ul className="cards">
      {renderPlantList}
    </ul>
  );
}

export default PlantList;
