function initMap(){

    // Map option

    var options = {
        center: {lat:40.4637  , lng:3.7492 },
        zoom: 7
    }

    //New Map
    map = new google.maps.Map(document.getElementById("map"),options)

    //listen for click on map location

    google.maps.event.addListener(map, "click", (event) => {
        //add Marker
        addMarker({location:event.latLng});
    })



    //Marker
/*
    const marker = new google.maps.Marker({
    position:{lat: 37.9922, lng: -1.1307},
    map:map,
    icon:"https://img.icons8.com/nolan/2x/marker.png"
    });

    //InfoWindow

    const detailWindow = new google.maps.InfoWindow({
        content: `<h2>Murcia City</h2>`
    });

    marker.addListener("mouseover", () =>{
        detailWindow.open(map, marker);
    })
    */

    //Add Markers to Array

    let MarkerArray = [ {location:{lat: 40.416729, lng: -3.703339}, 
        imageIcon: "https://img.icons8.com/nolan/2x/marker.png", 
        content: `<h2>Madrid</h2>`},

        {location:{lat:41.3874 , lng:-2.1686 } , content:`<h2>Barcelona</h2>`},

        {location:{lat: 38.5411, lng: -0.1225},content: `<h2>Benidorm City</h2>` }



    ]

    // loop through marker
    for (let i = 0; i < MarkerArray.length; i++){
        addMarker(MarkerArray[i]);

    }

    // Add Marker

    function addMarker(property){

        const marker = new google.maps.Marker({
            position:property.location,
            map:map,
            //icon: property.imageIcon
            });

            // Check for custom Icon

            if(property.imageIcon){
                // set image icon
                marker.setIcon(property.imageIcon)
            }

            if(property.content){

            const detailWindow = new google.maps.InfoWindow({
            content: property.content
    });
    
    marker.addListener("mouseover", () =>{
        detailWindow.open(map, marker);
    })
}

         



    }

    



}