function Park(parkObject){
    const e = document.createElement("div");
    e.innerHTML = parkObject.LocationName;
    return e;
}

function onContent(){
    const parkTypeSelect = document.getElementById("parkTypeSelect");
    const parkLocationSelect = document.getElementById("parkLocationSelect");
    const results = document.getElementById("results");
    parkTypesArray.forEach(parkTypeName => addPark(parkTypeName, parkTypeSelect));
    locationsArray.forEach(parkLocationName => addLocation(parkLocationName, parkLocationSelect))
    renderParks();
    filterButton.addEventListener("click", renderParks);
    parkTypeSelect.addEventListener("change", renderParks);
    parkLocationSelect.addEventListener("change", renderParks);

}
document.addEventListener("DOMContentLoaded", onContent);
    