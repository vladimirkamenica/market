<script>

import { Line } from "vue-chartjs";
import GlobalComponent from '../../class/globalComponents.js';

export default {
  extends: Line,
  components:{
     ...GlobalComponent
  },
  props: {
      apple :{
         type: Array,
         require: true

      },
      pear :{
         type: Array,
         require: true

      },
      plum :{
         type: Array,
         require: true

      }, peach :{
         type: Array,
         require: true

      }, 
      raspberry :{
         type: Array,
         require: true

      },
     datasets:{
       type : Array,
       require: true

     },
     load:{
       type : Boolean,
      
     },
     labels:{
       type: Array
     }
  },
  data() {
    return {
      gradient: null,
      gradient2: null,
      gradient3: null,
      gradient4: null,
      gradient5: null,
 
      
    };
  },
   mounted() {
  

  
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
       this.gradient3 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
       this.gradient4 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
       this.gradient5 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
 
 
    this.gradient.addColorStop(0, "rgba(50, 168, 82, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(50, 168, 82, 0.25)");
    this.gradient.addColorStop(1, "rgba(50, 168, 82, 0)");

    this.gradient2.addColorStop(0, "rgba(50, 52, 168, 0.9)");
    this.gradient2.addColorStop(0.5, "rgba(50, 52, 168, 0.25)");
    this.gradient2.addColorStop(1, "rgba(50, 52, 168, 0)");

    this.gradient3.addColorStop(0, "rgba(168, 50, 50, 0.9)");
    this.gradient3.addColorStop(0.5, "rgba(168, 50, 50, 0.25)");
    this.gradient3.addColorStop(1, "rgba(168, 50, 50, 0)");

    this.gradient4.addColorStop(0, "rgba(234, 255, 0, 0.9)");
    this.gradient4.addColorStop(0.5, "rgba(234, 255, 0, 0.25)");
    this.gradient4.addColorStop(1, "rgba(234, 255, 0, 0)");

     this.gradient5.addColorStop(0, "rgba(255, 0, 255, 0.9)");
    this.gradient5.addColorStop(0.5, "rgba(255, 0, 255, 0.25)");
    this.gradient5.addColorStop(1, "rgba(255, 0, 255, 0)");

    if(this.load) 
    this.renderChart(
      {
        labels:this.labels,
        datasets: [{
          
                      label: 'Jabuka',
                      borderColor: "#1ec94c",
                      pointBackgroundColor: "white",
                      borderWidth: 2,
                      backgroundColor: this.gradient,
                      data: this.apple,

        },
        {
          
                      label: 'Kruška',
                      borderColor: "#3234a8",
                      pointBackgroundColor: "white",
                      borderWidth: 2,
                      backgroundColor: this.gradient2,
                      data: this.pear,

        },
        {
          
                      label: 'Šljiva',
                      borderColor: "#a83232",
                      pointBackgroundColor: "white",
                      borderWidth: 2,
                      backgroundColor: this.gradient3,
                      data: this.plum,

        }
        ,
        {
          
                      label: 'Breskva',
                      borderColor: "#eaff00",
                      pointBackgroundColor: "white",
                      borderWidth: 2,
                      backgroundColor: this.gradient4,
                      data: this.peach,

        },
        {
          
                      label: 'Malina',
                      borderColor: "#ff00ff",
                      pointBackgroundColor: "white",
                      borderWidth: 2,
                      backgroundColor: this.gradient5,
                      data: this.raspberry,

        }]
      },
     
      { responsive: true, maintainAspectRatio: false,scales: {
            
              yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: (val) => (val + ' din')
        }
      }]
          }}
    );
     
  },
 
 
};


</script>