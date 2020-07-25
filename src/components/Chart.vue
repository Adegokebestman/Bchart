<template>
  <div id="app">
   <highcharts   :options="chartOptions" :highcharts="hcInstance"> </highcharts>
  </div>
</template>

<script>

import Highcharts from 'highcharts'
// import firestore from '../src/firebase';


export default {
	name: 'Chart',
	data() {
		return {
      hcInstance: Highcharts,
      
			chartOptions: {
        chart: {
          renderTo: 'container',
          type: 'column',
        },
        title: {
          text: 'Blood Group Chart'
        },
        xAxis: {
          title: {text:'Blood Type'},
          categories: ['AB', 'O', 'A', 'B']
        },
        yAxis: {
          title: {
            text: 'Age'
          }
        },
				series: [ 
            {
          name: 'Obe',
					data: [12, 2, 3, 5]
        },
        {
          name: 'chioma',
					data: [13, 15, 20, 21]
        },
        {
          name: 'Amaka',
					data: [11, 22, 13, 24]
        },
        {
          name: 'Luke',
					data: [10,32, 23, 26]
        },
        {
          name: 'Ada',
					data: [41, 52, 46, 27]
        },
        {
          name: 'Mike',
					data: [41, 51, 45, 47]
        },
        {
          name: 'Funke',
					data: [41, 31, 44, 48]
        },
        {
          name: 'Paul',
					data: [41, 13, 43, 50]
        },
        {
          name: 'Tayo',
					data: [41, 10, 42, 41]
        },
        {
          name: 'Chidi',
					data: [41, 9, 40, 51]
        },
        {
          name: 'Buki',
					data: [41, 8, 39, 52]
        },
        {
          name: 'Tolu',
					data: [41, 7, 38, 53]
        },
        {
          name: 'Bolu',
					data: [41, 16, 33, 55]
        },
        {
          name: 'Nike',
					data: [21, 15, 36, 54]
        },
        {
          name: 'Mathiew',
					data: [41, 17, 13, 2]
        },
        {
          name: 'Israel',
					data: [41, 18, 34, 19]
        },
        {
          name: 'Prince',
					data: [41, 19, 35, 23]
        },
        {
          name: 'Seyi',
					data: [15, 26, 25, 30]
        },
        {
          name: 'Ola',
					data: [14, 29, 22, 40]
        },
        {
          name: 'Bola',
					data: [16, 39, 18, 36]
        }
        ]
      
      }
		}   
	}
}
</script>

<style>

</style>
