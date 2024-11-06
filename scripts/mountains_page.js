
document.addEventListener("DOMContentLoaded", () => { 
    const mountainsSelect = document.getElementById("mountainsSelect");
    const results = document.getElementById("results");
    mountainForm.addEventListener("reset", e => {
        results.innerHTML = "";
        slideshow.style.display = "block";
    });
    mountainsArray.forEach(m => mountainsSelect.appendChild(new Option(m.name)));

            mountainsSelect.addEventListener("change", e => {
                const selectedIndex = mountainsSelect.selectedIndex;
                if(selectedIndex){
                    slideshow.style.display="none"
                    const m = mountainsArray[selectedIndex - 1];
                    const coords = m.coords.lat.toFixed(3) + ", " + m.coords.lng.toFixed(3);
         const apiUrl = `https://api.sunrise-sunset.org/json?lat=${m.coords.lat}&lng=${m.coords.lng}&formatted=0`;
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.status === "OK") {
                        // Convert the sunrise and sunset times from UTC to local time
                        const sunriseTime = new Date(data.results.sunrise);
                        const sunsetTime = new Date(data.results.sunset);

                        // Format the times to hours and minutes
                        const sunriseFormatted = `${sunriseTime.getHours()}:${sunriseTime.getMinutes().toString().padStart(2, '0')}`;
                        const sunsetFormatted = `${sunsetTime.getHours()}:${sunsetTime.getMinutes().toString().padStart(2, '0')}`;

                        // Update results container with mountain details
                        results.innerHTML = `
                            <h1>${m.name}</h1>
                            <p>${m.desc}</p>
                            <p>Elevation: <b>${m.elevation}</b></p>
                            <p>Effort: <b>${m.effort}</b></p>
                            <p>Coordinates: <b>(${coords})</b></p>
                            <p>Sunrise: <b>${sunriseFormatted} </b>    Sunset: <b>${sunsetFormatted}</b></p>
                        `;

                    // Add image
                    if(m.img){
                        const i = document.createElement("img");
                        i.alt = "Mountain Image";
                        i.src = "data/images/" + m.img;
                        results.appendChild(i);
                    }
                } else {
                    results.innerHTML = `<p class="error">Error fetching sunrise and sunset times.</p>`;
                }
            })   
    }else {
        results.innerHTML = "";
        slideshow.style.display = "block";
    }
});
});


/* <img src="data/images/${m.img}" alt="photo"></img> */