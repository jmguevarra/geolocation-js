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
                displayDeviceLocation.textContent = `${data.locality} ${data.city}, ${data.postcode} ${data.principalSubdivision}, ${data.countryName}`;
            });
    };

    const geoError = function(){
       
    };

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};




const findLocationBtn = document.querySelector('#check-location');
findLocationBtn.addEventListener('click', function(){
    checkDeviceLocation();

    setTimeout(function(){ //remove after 3sec
        const displayDeviceLocation = document.querySelector('.display-location')
        displayDeviceLocation.textContent = '';
    }, 3000);
});