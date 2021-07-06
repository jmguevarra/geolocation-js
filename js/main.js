const checkDeviceLocation = function(){
    const displayDeviceLocation = document.querySelector('.display-location')


    const geoSuccess = function(position){
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        var geoData;
        
        const geoCodeAPI = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`;
        fetch(geoCodeAPI)
            .then(function(res){ 
               return res.json();  //shor with Es6 res => res.json()
            }).then(function(data){
                //console.log(data);
                let htmlRender = `<div class="location-details">
                <span class="country"><b>Country:</b> ${data.countryName}</span>
                <span class="region"><b>Region:</b>  ${data.principalSubdivision}</span>
                <span class="postalcode"><b>Postal Code:</b>  ${data.postcode}</span>
                <span class="city"><b>City:</b>  ${data.city}</span>
                <span class="locality"><b>Locality:</b>  ${data.locality}</span>
                </div>`;

                displayDeviceLocation.innerHTML = htmlRender;
                //displayDeviceLocation.textContent = `${data.locality} ${data.city}, ${data.postcode} ${data.principalSubdivision}, ${data.countryName}`;
            });
    };

    const geoError = function(){
       
    };

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};




const findLocationBtn = document.querySelector('#check-location');
findLocationBtn.addEventListener('click', function(){
    checkDeviceLocation();

    // setTimeout(function(){ //remove after 3sec
    //     const displayDeviceLocation = document.querySelector('.display-location')
    //     displayDeviceLocation.innerHTML = '';
    // }, 5000);
});



//Menu Burger
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function(){
    const menu = document.querySelector('.menu');

    if(this.classList.contains('toggled')){
        this.classList.remove('toggled');
        menu.classList.remove('menu-toggled');
    }else{
        this.classList.add('toggled'); 
        menu.classList.add('menu-toggled');
    }
});