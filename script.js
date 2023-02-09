function displayresult()
{
    var city=document.getElementById("city").value;
    var apikey='ed74c4a46a02bbb4e1e605943ec8bd3b';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&units=metric')
        .then(response => response.json())
        .then(data =>{
            var t= data['main']['temp']  
            var maxt= data['main']['temp_max']
            var mint= data['main']['temp_min']
            var humidity= data['main']['humidity']
            var pressure= data['main']['pressure']
            document.getElementById("cityname").innerHTML=city;
            document.getElementById("temp").innerHTML=t+" deg C";
            document.getElementById("maxtemp").innerHTML=maxt+" deg C";
            document.getElementById("mintemp").innerHTML=mint+" deg C";
            document.getElementById("hum").innerHTML=humidity;
            document.getElementById("pressure").innerHTML=pressure;
            
        })
}