window.addEventListener('load',()=>{

    let long;
    let lat;
    let tempDesc =document.querySelector(`.temperature-description`);
    let tempKel =document.querySelector(`.temperature-degree`);
    let locTimZon =document.querySelector(`.location-timezone`);
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5a20a05f9e72bc504832db752c123efc`;

            fetch(api).then(data =>{
                return data.json();
            }).then(aData=>{
                console.log(aData);
                const {temp} = aData.main;
                //console.log(temp);
                const desc =aData.weather[0].description;
                //console.log(desc);
                const TimZon = aData.name;
                //console.log(TimZon);

                //Setting DOM elements from the API
                tempDesc.textContent = desc;
                tempKel.textContent = temp;
                locTimZon.textContent = TimZon;
            })
        });

       

    }

});