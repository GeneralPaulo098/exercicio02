import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.page.html',
  styleUrls: ['./boletim.page.scss'],
})
export class BoletimPage implements OnInit {
  boletim;
  media;
  constructor() {
    this.boletim = [
      {
        'disciplina': 'DDM',
        'nota': 10.0
      },
      {
        'disciplina': 'PAW',
        'nota': 10.0
      },
      {
        'disciplina': 'Redes',
        'nota': 7.0
      },
    ];
    let soma = 0
    for (let nota of this.boletim) {
      soma += nota.nota

    };
    this.media = soma / this.boletim.length
  }

  ngOnInit() {
  }

}
