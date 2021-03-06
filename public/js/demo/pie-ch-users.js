// Set new default font family and font color to mimic Bootstrap's default styling
;(Chart.defaults.global.defaultFontFamily = 'Nunito'),
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
Chart.defaults.global.defaultFontColor = '#858796'

// Pie Chart Example
var ctx = document.getElementById('myPieChart')
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Daşoguz', 'Lebap', 'Mary', 'Balkan', 'Ahal', 'Aşgabat'],
    datasets: [
      {
        data: [9, 22, 30, 35, 45, 70],
        backgroundColor: [
          'red',
          'yellow',
          '#36b9cc',
          '#1cc88a',
          '#4e73df',
          'grey',
        ],
        hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
        hoverBorderColor: 'rgba(234, 236, 244, 1)',
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: 'rgb(255,255,255)',
      bodyFontColor: '#858796',
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: true,
      caretPadding: 10,
    },
    legend: {
      display: true,
    },
    cutoutPercentage: 70,
  },
})
