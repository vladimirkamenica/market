<script>
import { Doughnut } from "vue-chartjs";
export default {
  extends: Doughnut,
  props:{
    labels:{
      type: Array,
      require: true
    },
     data:{
      type: Array,
      require: true
    }, 
    load:{
      type: Boolean
    },
  },
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(
  {
      
       chartOptions: {
        hoverBorderWidth: 20
      },
    
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: this.labels,
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#f0d005", "#d505f0"],
            data: this.data
          }
        ],
      
  
  },
          { responsive: true,
           maintainAspectRatio: false,  }
           
        
        
      
    );
  }
};
</script>

