
function addPark(parkTypeName, parkTypeSelect){
    parkTypeSelect.appendChild(new Option(parkTypeName));
}

function addLocation(text, target){
   target.appendChild(new Option(text));
    }

function Park(parkObject){
    const e = document.createElement("div");
    e.innerHTML = parkObject.LocationName;
    return e;
}

function renderParks(){
    const results = document.getElementById("results");
    const selectedType = parkTypeSelect.value;
    const selectedLocation = parkLocationSelect.value;
    results.innerHTML = "";
    let filtered = nationalParksArray;
    if(selectedType){
        filtered = filtered.filter(p =>p.Locationname.includes(selectedType));
    }
    if(selectedLocation){
        filtered = filtered.filter( p => p.State === selectedLocation)
    }
    filtered.forEach( p => results.appendChild(Park(p)));
    if(filtered.length < 1){
        results.innerHTML = "No results found matching the filter."
    }
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
    