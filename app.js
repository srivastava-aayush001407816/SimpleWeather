window.addEventListener('load',()=>{

    let long;
    let lat;
    let tempDesc =document.querySelector(`.temperature-description`);
    let tempKel =document.querySelector(`.temperature-degree`);
    let locTimZon =document.querySelector(`.location-timezone`);
    const image = document.createElement('img');
    //let locationIcon = document.querySelector('.weather-icon');
    
    //watchPosition(success, error, options).
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
                //console.log(Math.round((temp - 273.15)* 1.8000+32));
                //console.log(((temp - 273.15)* 1.8000+32).toFixed(1));
                const desc =aData.weather[0].description;
                //console.log(desc);
                const TimZon = aData.name;
                //console.log(TimZon);
                const icon = aData.weather[0].icon;
                console.log(icon);
                image.src="/icons/"+icon+".png";
                document.querySelector('.icons').appendChild(image);
               // setIcons(icon,document.querySelector(`.icon`));

                //Setting DOM elements from the API
                tempDesc.textContent = desc;
                tempKel.textContent = ((temp - 273.15)* 1.8000+32).toFixed(1);
                locTimZon.textContent = TimZon;
            })
        });
        
    }

    function setIcons(icon,iconId){
        const skycons = new Skycons({color:"white"});
        const currentIcon = icon.replace(/ /g, "_").toUpperCase();
        console.log(currentIcon);
        skycons.play();
        return skycons.set(iconId,Skycons[currentIcon]);
    }

});