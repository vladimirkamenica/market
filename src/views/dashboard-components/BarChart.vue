<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
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
    

  
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            innerWidth: 50,
            backgroundColor: ['#0b6e00', '#006ca2', '#ff3333', '#4287f5','#f59e42'],
            
            data: this.data,
          }
        ]
      },
      
      { responsive: true, maintainAspectRatio: false, scales: {
              xAxes: [{
                  barThickness: 60,
              }],
              yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: (val) => (val + ' din')
        }
      }]
          } ,
           legend: {
      display: false,
      labels: {
        fontSize: 20,
        fontColor: '#595d6e',
      }
    },}
    );
      
  }
};
</script>
