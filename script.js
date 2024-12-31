const api_key="937cd6f148c323143a351f54de327162";
const api_url="https://api.openweathermap.org/data/2.5/weather?&units=metric";
// const city= document.querySelector("input").value;
const input=document.querySelector(".search input");
const button=document.querySelector(".search button");
const img_update=document.querySelector(".weather-icon");


async function checkWeather(city)
{
    
    if(input.value==""){   // checking the null input before calling api
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    else{

    const response = await fetch(api_url+ `&q=${city}` + `&appid=${api_key}`);
    var data= await response.json();  
    console.log(data);

        if(response.status==404 || input.value.trim()==" " ){ //checking whitespaces like space, tab : trim()
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }

        else{
            document.querySelector(".error").style.display="";
            document.querySelector(".city").innerHTML=data.name ;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
            document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";
            
            if(data.weather[0].main=="Clouds"){
                img_update.src="images/clouds.png";
            }
            else if(data.weather[0].main=="Clear"){
                img_update.src="images/clear.png"
            }
            else if(data.weather[0].main=="Rain"){
                img_update.src="images/rain.png"
            }
            else if(data.weather[0].main=="Drizzle"){
                img_update.src="images/drizzle.png"
            }
            else if(data.weather[0].main=="Mist"){
                img_update.src="images/mist.png"
            }
            
            
            
            
        document.querySelector(".weather").style.display="block";

            }
        }
}


button.addEventListener("click",()=>{
    checkWeather(input.value);

});

input.addEventListener("keyup",(e)=>{
    if(e.key === "Enter") {
    checkWeather(input.value);//function call
      }
    });


// checkWeather();
