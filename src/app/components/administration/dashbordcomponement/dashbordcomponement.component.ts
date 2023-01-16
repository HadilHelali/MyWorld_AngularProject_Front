import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbordcomponement',
  templateUrl: './dashbordcomponement.component.html',
  styleUrls: ['./dashbordcomponement.component.scss']
})
export class DashbordcomponementComponent implements OnInit {
  data: any;
  data2: any;
  constructor() { }

  ngOnInit(): void {
    this.data = {
     
      datasets: [
          {
              label: ['FOCUS WORLD','TODO WORLD','CHAT WORLD'],
              backgroundColor:[ '#1DC7EA','#FF9500','#FF4A55'],
              borderColor: [ '#1DC7EA','#FF9500','#FF4A55'],
              data: [65, 59, 80,],
          },
          
      ],
  };

  this.data2 = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre',
    'Novembre', 'Décembre',
],
    datasets: [
        {
            label: 'FOCUS WORLD',
            backgroundColor: '#1DC7EA',
            borderColor: '#1DC7EA',
            data: [65, 59, 80, 81, 56, 55, 40, 60, 53, 70, 75, 90],
        },
        {
            label: 'TODO WORLD',
            backgroundColor: '#FF9500',
            borderColor: '#FF9500',
            data: [28, 48, 40, 19, 86, 27, 90, 60, 50, 88, 69, 78],
        },
        {
          label: 'CHAT WORLD',
          backgroundColor: '#FF4A55',
          borderColor: '#FF4A55',
          data: [28, 48, 40, 19, 86, 27, 90, 60, 50, 88, 69, 78],
      },
    ],
};
}

  }

  

