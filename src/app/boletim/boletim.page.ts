import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.page.html',
  styleUrls: ['./boletim.page.scss'],
})
export class BoletimPage implements OnInit {
  
  nova_disciplina:{disciplina:string, nota:number,};
  boletim:{disciplina:string, nota:number,}[];
  media:number;
 
  constructor(private http: Http) {
    this.reset();
    this.http.get("http://5d262d00eeb36400145c59b3.mockapi.io/notas").subscribe((result:any) => {
      this.boletim = result.json();
      let soma = 0
      for (let nota of this.boletim) {
        soma += nota.nota
  
      };
      this.media = soma / this.boletim.length
    })
  }

  ngOnInit() {
  }

  adicionar() {
    this.http.post("http://5d262d00eeb36400145c59b3.mockapi.io/notas",this.nova_disciplina).subscribe((result) =>{
      this.boletim.push(this.nova_disciplina);
      this.reset();
    })

  }
  reset() {
    this.nova_disciplina = {
      disciplina: '',
      nota: 0
    }
  }

}
