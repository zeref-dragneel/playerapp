import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
/**
 * Generated class for the ForcePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-force',
  templateUrl: 'force.html',
})
export class ForcePage {
  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForcePage');
  
  this.lineChart = new Chart(this.lineCanvas.nativeElement, {

    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: "#f53d3d",
            fill: true,
            backgroundColor:"#f53d3d40"
        }],

    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }

});
  }

}
