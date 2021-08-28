<template>
  <div id="weather2">
      <b-row >
          <b-col >
                <h6>{{places[0].place}}</h6>
          </b-col>
          <b-col class="text-right">
              <h6>{{timeConverter(places[0].dt,'hour')}}</h6>            
          </b-col>
      </b-row>
      <b-row>
          <b-col class="text-center">
                <h1 class="mb-0 font-weight-bold" id="heading"> {{mathCeliOrFloor(places[0].temp)}}° C </h1> <span class="small grey">{{places[0].main}}</span>
         </b-col>
      </b-row>
      <b-row>
          <b-col >
           <b-row>
               <b-col>
                        <p class="my-1"> <font-awesome-icon style="color:#2962FF"  :icon="['fas', 'wind']" /> <span> {{places[0].wind}} km/h </span> </p>
                    
               </b-col>
          </b-row>  
           <b-row>
               <b-col>
                        <p class="my-1"> <font-awesome-icon style="color:#35B1E8" :icon="['fas', 'tint']" /><span> {{places[0].humidity}}% </span> </p>
                   
               </b-col>
          </b-row>   
         
            </b-col>
           <b-col class="text-right">
                <component :is="findWeatherIcon(places[0].main)"></component>                                 
           </b-col>
         </b-row >
                <b-row class="mt-4">
                    <b-col>
                          <b-row>
                              <b-col>
                                  <h6>{{places[1].place}}</h6>
                              </b-col>
                          </b-row>
                          <b-row>
                              <b-col class="text-center">
                                 <h1 class="mb-0 font-weight-bold" id="heading2"> {{mathCeliOrFloor(places[1].temp)}}° C </h1> <span class="small grey">{{places[1].main}}</span>
                           </b-col>
                          </b-row>
                            <b-row>
                              <b-col class="text-center">
                                   <component :is="findWeatherIcon(places[1].main)"></component>
                           </b-col>
                          </b-row>
                          <b-row>
                              <b-col >
                               <b-row>
                                 <b-col>
                                   <p class="my-1"> <font-awesome-icon style="color:#2962FF"  :icon="['fas', 'wind']" /> <span> {{places[1].wind}} km/h </span> </p>                  
                                </b-col>
                             </b-row>  
                              <b-row>
                                <b-col>
                                   <p class="my-1"> <font-awesome-icon style="color:#35B1E8" :icon="['fas', 'tint']" /><span> {{places[1].humidity}}% </span> </p>
                                </b-col>
                            </b-row>   
                           </b-col>
                          </b-row>
                    </b-col>
                      <b-col>
                          <b-row>
                              <b-col>
                                  <h6>{{places[2].place}}</h6>
                              </b-col>
                          </b-row>
                          <b-row>
                              <b-col class="text-center">
                                 <h1 class="mb-0 font-weight-bold" id="heading2"> {{mathCeliOrFloor(places[2].temp)}}° C </h1> <span class="small grey">{{places[2].main}}</span>
                           </b-col>
                          </b-row>
                            <b-row>
                              <b-col class="text-center">
                                 <component :is="findWeatherIcon(places[2].main)"></component>
                           </b-col>
                          </b-row>
                           <b-row>
                              <b-col >
                               <b-row>
                                 <b-col>
                                   <p class="my-1"> <font-awesome-icon style="color:#2962FF" :icon="['fas', 'wind']" /> <span> {{places[2].wind}} km/h </span> </p>                  
                                </b-col>
                             </b-row>  
                              <b-row>
                                <b-col>
                                   <p class="my-1"> <font-awesome-icon style="color:#35B1E8" :icon="['fas', 'tint']" /><span> {{places[2].humidity}}% </span> </p>
                                </b-col>
                            </b-row>   
                           </b-col>
                          </b-row>
                    </b-col>
                </b-row>
            </div>
</template>

<script>
import Rain from './type/Rain.vue';
import Clear from './type/Clear.vue';
import FewClouds from './type/FewClouds.vue';
import ScatterClouds from './type/ScatterClouds.vue';
import BrokenClouds from './type/BrokenClouds.vue';
import Thunderstorm from './type/Thunderstorm.vue';
import Snow from './type/Snow.vue';
import Fog from './type/Fog.vue';






export default {
name: "Weather2",
data(){
    return{
       apiKey : '475a37314ae31b10198e26d314594071',
       lat : '',
       lon : '',
       valueCurrent: "http://api.openweathermap.org/data/2.5/weather?q=Beograd&units=metric&appid=475a37314ae31b10198e26d314594071",
       place : '',
       img : 'Clear',
       temp : '',
       hourlyDaily : [],
       carrentPlace: {},
       display : false,
       rain : false,
       clear : true,
       places :[
           {
               place: 'Beograd',
               temp : 0,
               temp_max : 0,
               humidity : 0,
               wind : 0,
               main : '',
               dt: ''
           },
           {
               place: 'Čačak',
               temp : 0,
               temp_max : 0,
               humidity : 0,
               wind : 0,
               main : '',
                dt: ''
           },
           {
               place: 'Lajkovac',
               temp : 0,
               temp_max : 0,
               humidity : 0,
               wind : 0,
               main: '',
                dt: ''
           },
       ],
       main : [
           {
               name: 'Thunderstorm',
               img : 'thunderstorm'
           },
            {
               name: 'Drizzle',
               img : 'rain'
           },
            {
               name: 'Rain',
               img : 'rain'
           },
            {
               name: 'Snow',
               img : 'snow'
           },
            {
               name: 'Mist',
               img : 'fog'
           },
            {
               name: 'Smoke',
               img : 'fog'
           },
           {
               name: 'Haze',
               img : 'fog'
           },
           {
               name: 'Dust',
               img : 'fog'
           },
           {
               name: 'Fog',
               img : 'fog'
           },
            {
               name: 'Sand',
               img : 'fog'
           },
           {
               name: 'Ash',
               img : 'fog'
           },
           {
               name: 'Squall',
               img : 'fog'
           },
           {
               name: 'Tornado',
               img : 'fog'
           },
           {
               name: 'Clear',
               img : 'clear'
           },
           {
               name: 'Clouds',
               img : 'broken-clouds'
           },
           
       ]
    }
},
components:{
Rain,
Clear,
FewClouds,
ScatterClouds,
BrokenClouds,
Thunderstorm,
Snow,
Fog
},
computed:{
  
},
mounted(){
this.getCurrentPlace();
},
methods:{
   
    mathCeliOrFloor(num){
        
        if(num % 2 != 0){
         let num2 = String(num).split('.')[0];
         let res = num - parseInt(num2);
        return res >= 0.5 ? Math.ceil(num) : Math.floor(num);
        }
        
       return num;
    
    },
    setImg(img){
        return "http://openweathermap.org/img/w/" + img + ".png"
    },
    findWeatherIcon(main){
        let find = this.main.find(x=> x.name === main);
        if(find) return find.img;
    },
   getCurrentPlace(){
       this.places.forEach(pl =>{
              this.$http.get(`http://api.openweathermap.org/data/2.5/weather?q=${pl.place}&units=metric&appid=475a37314ae31b10198e26d314594071`)
                .then(res =>{
                   console.log(res);
                   pl.temp = res.data.main.temp;
                   pl.temp_max = res.data.main.temp_max;
                   pl.humidity = res.data.main.humidity;
                   pl.wind = res.data.wind.speed;
                   pl.main = res.data.weather[0].main;
                   pl.dt = res.data.dt;
                }).catch(err =>{
                    console.log(err);
                })
       })
     
   },
  getAxiosHourlyDaily(){
    this.$http.get('https://api.openweathermap.org/data/2.5/onecall?lat='+this.lat+'&lon='+this.lon+'&units=metric&appid=475a37314ae31b10198e26d314594071')
    .then(res =>{
        console.log(res.data);
        this.hourlyDaily = res.data.daily;
    })
    .catch(err =>{
     console.log(err);
    })
},
timeConverter(weatherDate,x){
    var a = new Date(weatherDate * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var days = ["Ned","Pon", "Uto", "Sre", "Čet", "Pet","Sub"];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var day =days[a.getDay()];
    var min = a.getMinutes();
   // var sec = a.getSeconds();
    var h = a.getHours();
    var time ="";
    switch(x)
    {
        case "current":
            time = date + ' ' + month + ' ' + year;
         break;
       case "day":
            time = day + date;
         break;
       case "hour":
                time = this.timeFormat(h)  + " : " + this.timeFormat(min) 
         break;
    }
    return time;
  },
  timeFormat(time){
    return time >= 10 ? time : "0"+time;
}
},

}
</script>

<style lang="scss">
@import '@/assets/weather.scss';
@import '@/assets/weather22.scss';



</style>