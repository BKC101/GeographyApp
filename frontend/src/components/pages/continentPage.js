const ContinentPage = () =>{
    return(
        <body class="page">
        <section class="world-section-continent-info">
            <h2 class="world-section-title" id="myHeading" >The World</h2>
            <img class="world-img" id="continentImage" src="images/world.png"></img>
            <h2 class="world-section-title" id="myCountries" >Countries: 200</h2>
            <h2 class="world-section-title" id="myPopulation" >Population: 8 Billion</h2>
            <h2 class="world-section-title" id="myLandArea" >Land Area: 148.94 Million km^2</h2>
        </section>
        <section class="world-section-continent-info">
            <h2 class="world-section-title">Test Yourself</h2>
            <div class="continents">
                <h2 class="mode">Study</h2>
                <h2 class="mode">Practice</h2>
                <h2 class="mode">Review</h2>
                <h2 class="mode">Challenge</h2>
            </div>
        </section>
    </body>
    )
}

export default ContinentPage;