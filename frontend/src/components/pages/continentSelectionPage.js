function continentPage(continent) {
    localStorage.setItem("image", continent);
    if(continent == 'world') {
        localStorage.setItem("title", "The World");
        localStorage.setItem("countries", "200");
        localStorage.setItem("population", "8 Billion");
        localStorage.setItem("landArea", "148.94 Million km^2");
    } else if(continent == 'europe') {
        localStorage.setItem("title", "Europe");
        localStorage.setItem("countries", "46");
        localStorage.setItem("population", "745.17 Million");
        localStorage.setItem("landArea", "10.18 Million km^2");
    } else if(continent == 'asia') {
        localStorage.setItem("title", "Asia");
        localStorage.setItem("countries", "48");
        localStorage.setItem("population", "4.69 Billion");
        localStorage.setItem("landArea", "44.579 Million km^2");
    } else if(continent == 'africa') {
        localStorage.setItem("title", "Africa");
        localStorage.setItem("countries", "55");
        localStorage.setItem("population", "1.39 Billion");
        localStorage.setItem("landArea", "30.37 Million km^2");
    } else if(continent == 'northAmerica') {
        localStorage.setItem("title", "North America");
        localStorage.setItem("countries", "23");
        localStorage.setItem("population", "592.296 Million");
        localStorage.setItem("landArea", "24.709 Million km^2");
    } else if(continent == 'southAmerica') {
        localStorage.setItem("title", "South America");
        localStorage.setItem("countries", "12");
        localStorage.setItem("population", "434.25 Million");
        localStorage.setItem("landArea", "17.84 Million km^2");
    } else if(continent == 'oceania') {
        localStorage.setItem("title", "Oceania");
        localStorage.setItem("countries", "16");
        localStorage.setItem("population", "44.49 Million");
        localStorage.setItem("landArea", "8.526 Million km^2");
    }
}

if (window.location.pathname === "/continent") {
    window.onload = updateImageFromVariable;
}

function updateImageFromVariable() {
    var title = localStorage.getItem("title");
    var image = localStorage.getItem("image");
    var countries = localStorage.getItem("countries");
    var population = localStorage.getItem("population");
    var landArea = localStorage.getItem("landArea");

    var myHeading = document.getElementById("myHeading");
    myHeading.innerText = title;

    var myImage = document.getElementById("continentImage");
    myImage.src = "images/" + image + ".png";

    var myCountries = document.getElementById("myCountries");
    myCountries.innerText = "Countries: " + countries;

    var myPopulation = document.getElementById("myPopulation");
    myPopulation.innerText = "Population: " + population;

    var myLandArea = document.getElementById("myLandArea");
    myLandArea.innerText = "Land Area: " + landArea;
}

function openPage() {   
    window.open("http://localhost:8096/continent", "_self");
}

const ContinentSelectionPage = () =>{
    return(
        <body class="page">
        <section class="world-section-continents">
            <h2 class="world-section-title">Old World</h2>
            <div class="continents">
                <div class="continent">
                    <span class="continent-title">Europe</span>
                    <input class="img" type="image" onClick={(e) => {continentPage('europe'); openPage();}} src="images/europe.png"></input>
                </div>
                <div class="continent">
                    <span class="continent-title">Asia</span>
                    <input class="img" type="image" onClick={(e) => {continentPage('asia'); openPage();}} src="images/asia.png"></input>
                </div>
                <div class="continent">
                    <span class="continent-title">Africa</span>
                    <input class="img" type="image" onClick={(e) => {continentPage('africa'); openPage();}} src="images/africa.png"></input>
                </div>
            </div>
        </section>

        <section class="world-section">
            <span class="header">Choose a Continent</span>
            <h2 class="world-section-title">The World</h2>
            <input class="world-img" type="image" onClick={(e) => {continentPage('world'); openPage();}} src="images/world.png"></input>
        </section>

        <section class="world-section-continents">
            <h2 class="world-section-title">New World</h2>
            <div class="continents">
                <div class="continent">
                    <span class="continent-title">North America</span>
                    <input class="img" type="image" onClick={(e) => {continentPage('northAmerica'); openPage();}} src="images/northAmerica.png"></input>
                </div>
                <div class="continent">
                    <span class="continent-title">South America</span>
                    <input class="img" type="image" onClick={(e) => {continentPage('southAmerica'); openPage();}} src="images/southAmerica.png"></input>
                </div>
                <div class="continent">
                    <span class="continent-title">Oceania</span>
                    <input class="img" type="image" onClick={(e) => {continentPage('oceania'); openPage();}} src="images/oceania.png"></input>
                </div>
            </div>
        </section>
    </body>
    )
}

export default ContinentSelectionPage;