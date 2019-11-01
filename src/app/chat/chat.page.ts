import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  nova_conversa:{nome:string, assunto:string, img:string}[];
  conversas:{nome:string, assunto:string, img:string}[];
  constructor() {
    this.conversas = [
      {
        nome:'Mario',
        assunto:'prova dificil',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWUq9De4ggGBEa5X_SY-3yxvfFVYdXBc-xgNm4BXJHWR6-8G3',
      },
      {
        nome:'Maria',
        assunto:'a prova foi otima',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHa3FIRgWlEmdIsmW40PZZATRbGJpOGDoTlLWZL2EkR_J6sYAtQ'
      }

    ]
   }

  ngOnInit() {
  }

}
