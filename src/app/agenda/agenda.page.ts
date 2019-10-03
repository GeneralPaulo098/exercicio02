import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  
  agenda;
  
  constructor() {
    this.agenda = [
      {
        'data':'30/09 10:00',
        'conteudo':'trabalho DDM',
      },
      {
        'data':'02/10 12:00',
        'conteudo':'prova de PAW'
      },
      {
        'data':'08/11 12:00',
        'conteudo':'prova de Banco de Dados'
      }
    ]
   }

  ngOnInit() {
  }

}
