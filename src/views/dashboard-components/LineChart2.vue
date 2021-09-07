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
      display : false,
      
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
 
    this.gradient.addColorStop(0, "rgba(41, 98, 255, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(41, 98, 255, 0.25)");
    this.gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");245, 72, 66

    this.gradient3.addColorStop(0, "rgba(245, 72, 66, 0.9)");
    this.gradient3.addColorStop(0.5, "rgba(245, 72, 66, 0.25)");
    this.gradient3.addColorStop(1, "rgba(245, 72, 66, 0)");

    this.gradient4.addColorStop(0, "rgba(131, 235, 52, 0.9)");
    this.gradient4.addColorStop(0.5, "rgba(131, 235, 526, 0.25)");
    this.gradient4.addColorStop(1, "rgba(131, 235, 52, 0)");
    

    if(this.load) 
    this.renderChart(
      {
        labels:this.labels,
        datasets: this.datasets,
      },
     
      { responsive: true, maintainAspectRatio: false}
    );
     
  },
  
 
};


</script>