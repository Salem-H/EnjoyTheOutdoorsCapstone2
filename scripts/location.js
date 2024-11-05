
function addLocation(text, target){
   target.appendChild(new Option(text));
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