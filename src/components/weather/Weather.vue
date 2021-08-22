<template>
  <div id="weather">
  
      <b-row  class="justify-content-center shadow-sm bg-white mt-2 m-0 p-0 align-items-center ">
     <b-col cols="10" md="4" sm="10">
         <b-row class="align-items-center">
           <b-col class="text-center ">
            <h4> {{place}}<br>
              Weather</h4> 
            </b-col>
           <b-col class="text-center">
               <component :is="findWeatherIcon(img)"></component>
           </b-col>
           <b-col class="text-center ">
               <h4 class="degree-celsius">{{temp}} <span>&#8451;</span> </h4>      
           </b-col>
         </b-row>
     </b-col>
     <b-col cols="12" md="8" sm="12">
       <b-row class="justify-content-center"> 
            <b-col class="text-center" v-for="(daily) in hourlyDaily.slice(1)"  :key="daily.id" >
                 <b-row >
                   <b-col>
                      {{timeConverter(daily.dt,'day')}}
                   </b-col>                  
                 </b-row>
                  <b-row>
                   <b-col>
                       <component :is="findWeatherIcon(daily.weather[0].main)"></component>
                   </b-col>                  
                 </b-row>
                  <b-row>
                   <b-col>
                      <b-row>
                   <b-col cols="12" md="6" sm="12" style="color:#1668ba">
                     <h6>{{mathCeliOrFloor(daily.temp.min)}}<span>&#8451;</span> </h6>
                   </b-col>    
                    <b-col cols="12" md="6" sm="12" style="color:#ba1616">
                     <h6>{{mathCeliOrFloor(daily.temp.max)}}<span>&#8451;</span> </h6> 
                   </b-col>                
                 </b-row>
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
name: "Weather",
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
this.testt();
},
methods:{
    testt(){
        this.$http.get('https://api.weather.gov/points/44.804,20.4651').then(res =>{
            console.log(res);
        })
    },
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
        let find = this.main.find(x=> x.name == main);
      return find.img;
    },
   getCurrentPlace(){
      this.$http.get(this.valueCurrent)
                .then(res =>{
                   console.log(res);
                   this.carrentPlace = res.data;
                   this.place = res.data.name;
                   this.img = res.data.weather[0].main;
                   this.temp =this.mathCeliOrFloor(res.data.main.temp);
                   this.lat = res.data.coord.lat;
                   this.lon = res.data.coord.lon;
                   this.getAxiosHourlyDaily();
                }).catch(err =>{
                    console.log(err);
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
    //var min = a.getMinutes();
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
                time = h + " : 00"
         break;
    }
    return time;
  }
}
}
</script>

<style  lang="scss">
@import '@/assets/weather.scss';
</style>