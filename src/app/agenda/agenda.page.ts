import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  
  agenda:{data:any,hora:any, conteudo:any,}[];

  constructor(public toastController: ToastController){
    
    this.agenda = [
      {
        data:'30/09',
        hora:'10:00',
        conteudo:'trabalho DDM',
      },
      {
        data:'02/10',
        hora:'12:00',
        conteudo:'prova de PAW'
      },
      {
        data:'08/11',
        hora:'12:00',
        conteudo:'prova de Banco de Dados'
      }
    ];
  }
  
  async apagar(agendado) {
    let x = this.agenda.indexOf(agendado);
    this.agenda.splice(x,1);
    let toast = await this.toastController.create({
      message: 'agenda apagada com sucesso!',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
