import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
  numberCard = '0';
  constructor() { }

  ngOnInit(): void {
  }


   /**
     * Change affichage Card number
     * @param numCard numero de card a afficher dans le menu de navigation
     */
   changeCard(numCard: string) {
    this.numberCard = numCard;
}
}
