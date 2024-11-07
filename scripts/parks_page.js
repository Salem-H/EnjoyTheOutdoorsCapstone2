function addPark(parkTypeName, parkTypeSelect) {
    parkTypeSelect.appendChild(new Option(parkTypeName));
}

function addLocation(text, target) {
    target.appendChild(new Option(text));
}

function Park(parkObject) {
    const container = document.createElement("div");
    container.classList.add("park-container"); // A class for styling the container

    // Basic Information
    const basicInfo = document.createElement("div");
    basicInfo.classList.add("basic-info");
    basicInfo.innerHTML = `
        <strong>Location Name:</strong> ${parkObject.LocationName}<br>
        <strong>Address:</strong> ${parkObject.Address}<br>
        <strong>City:</strong> ${parkObject.City}, <b> State: </b>${parkObject.State}, <b> ZipCode: </b> ${parkObject.ZipCode}
    `;

    // "More Information" Button
    const moreInfoButton = document.createElement("button");
    moreInfoButton.classList.add("more-info-btn");
    moreInfoButton.textContent = "More Information";
    const moreInfoContainer = document.createElement("div");
    moreInfoContainer.classList.add("more-info");
    moreInfoContainer.style.display = "none"; // Hidden by default

    // Detailed Information (to be shown on button click)
    moreInfoContainer.innerHTML = `
        <strong>Phone:</strong> ${parkObject.Phone}<br>
        <strong>Fax:</strong> ${parkObject.Fax}<br>
        <strong>Latitude:</strong> ${parkObject.Latitude}<br>
        <strong>Longitude:</strong> ${parkObject.Longitude}
    `;

    // Toggle visibility of the more info
    moreInfoButton.addEventListener("click", () => {
        const isVisible = moreInfoContainer.style.display === "block";
        moreInfoContainer.style.display = isVisible ? "none" : "block";
        moreInfoButton.textContent = isVisible ? "More Information" : "Less Information";
    });

    // Append everything to the container
    container.appendChild(basicInfo);
    container.appendChild(moreInfoButton);
    container.appendChild(moreInfoContainer);
    return container;
}

function renderParks() {
    const results = document.getElementById("results");
    const selectedType = parkTypeSelect.value;
    const selectedLocation = parkLocationSelect.value;
    results.innerHTML = ""; // Clear away the old results
    let filtered = nationalParksArray;

    // Filter parks based on the selected type and location
    if (selectedType) {
        filtered = filtered.filter(p => p.LocationName.toLowerCase().includes(selectedType.toLowerCase()));
    }
    if (selectedLocation) {
        filtered = filtered.filter(p => p.State.toLowerCase() === selectedLocation.toLowerCase());
    }

    // Add parks to the results container
    if (filtered.length > 0) {
        filtered.forEach(p => results.appendChild(Park(p)));
    } else {
        results.innerHTML = "No results found matching the filter.";
    }
}

function onContent() {
    const parkTypeSelect = document.getElementById("parkTypeSelect");
    const parkLocationSelect = document.getElementById("parkLocationSelect");
    const results = document.getElementById("results");
    
    // Add options to the select elements
    parkTypesArray.forEach(parkTypeName => addPark(parkTypeName, parkTypeSelect));
    locationsArray.forEach(parkLocationName => addLocation(parkLocationName, parkLocationSelect));
    
    // Initial render of parks
    renderParks();

    // Event listeners for filtering and rendering parks
    filterButton.addEventListener("click", renderParks);
    parkTypeSelect.addEventListener("change", renderParks);
    parkLocationSelect.addEventListener("change", renderParks);
}

document.addEventListener("DOMContentLoaded", onContent);
