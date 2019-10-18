import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
usuario:{nome:string, img_boletim:string,img_agenda:string, img_galeria:string, img_chat:string};
  constructor() {
    this.usuario ={
      nome:'Joao',
      img_boletim:'https://img.icons8.com/metro/452/report-card.png',
      img_agenda:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAY1BMVEX///8AAABQUFCCgoK8vLwUFBShoaFeXl6qqqrt7e12dnbW1tbw8PDl5eXb29vp6ekoKCj5+fmVlZVERERtbW0tLS09PT1kZGTQ0NBVVVXCwsINDQ2bm5seHh7KysozMzOMjIyFIZnUAAAFHUlEQVRoge2ba5uiIBTHx9TynqapWWbf/1PuZBwE5HBRZ+fZZ/2/2kblJ3BugPv1tWvXf6j0cTpsoJub2bMfzmaqEkv2aTu24wzpb/X7rcaGnW7Ldhzv9zruODcL+KYzPsoCfvg8UbqrdVoMdy0eQdT9Jtzb4Tv834G7jv+tO4SoZvxppPuwAXzUgVyxiX3XHb7Dl8JLcuVmAe9Xw7vjqIBc8Y7mClbDV2qH7/AdbgaPPv+s+StyRdI1WZh1wWsZ3Di8+u7ZgrAtvFmwDN8IfrVZCW4Mb+wW4JvCLxuiZdauSKn+c1M2C4+9UQB4ejMhllY8g8fl9XpdHsHTalNmZZBJ2kCMB/WlNfXEVfDMLaVWOVRt8bPwIpCTP8of4c/Bk2OuQL/Vu1r8Qviz1qDH3geaVhbBU9OyeohN4Uk4CpyF/BzFm0/Xi5B7PtR1PVz92YWjIVyRUjnvdQXA6ei15/frFWHsBZVwtVLYvVF4ZQNb0rBN59E86GUuZxA1ng1M4BXLZqe7P8obDjvWFa4o3QDuMy6TDEyvVfPpMUGgx8zOAM4w2H676jBeXCbrwzbC9XCfsZhpvu/6miK7TvMutzo8pYK1Mx2f7Pxgkr2K6f6blM7A03gU5M3s8zOeHutoWw3qP0FVMW/7ok9IqxCLCJfS2BKh94xzxWy5Xyi9XQenxoYfZQSzmaKHCaVkoszhTzrfeMwiZnNi/kQj3mMFPIGwdVfYmgROa8H7vAgzhh+hByofk8Ez8Pc5wxRe5GgTGjgYguPMiguNq4ViC7nSwaXwrxJ7b02QacUGlPkZgYOpzjKMOrzSnJKR53slG4HTqCyWVWo4jYoQKNUdx+Ctww+qGRxmKSGjnmuWiQicTprwuBoOHYVXx+OqGg7mKoy7Gu4JD+sWihg89SeMHC4pIJ/8XdrNHgz+RcLjwDuqunQGe3OwRk3hYLD8EtIowhVmtq6Ag9Hw1ZwRHKKEtnRC4an09Y3gxN7usoLADH4eZO5iBCcVQa5d9KPwgiRWvg4xgpNiaNCu+FE41BT8FSP4i3fCJXByhf+iYhW86PgNo+6GwoUIth5+xnYI8J4vgMvnvEAPv/A5XzDsxNqvfB0UY2yZtZO6e4G1Ez/3+fhkAw/JDC3wc3mES+8YfN4aRDi+eDeCJ+RRIR2/ZOBv9fNgBKPE52QCfynhkNUq4c8XGdo5SModuFOa1RABDXxK/YoKQRnG5/MGBb9VJ/yLLz3gSMgCVyjDPBTMDhOk46Wb01CGCQUBu8MjEbFvyIi1wW6uTLC6FkdO3XUYJ1jodovYZ/L0fMkRYOCxqySiwrjni+Dw6pIyrC3RaEG7ShepSw62MmJuvtRe2wAV3A/bG6XREQIvmHExTBgrhN0g+8Mtuom1/CQSKm/52ClE91O0VT+uEGb9ajnwNIxpa1+FqFfYRRq6l6NbZKpFw9HL4iEaRiSpzkYx9Uhzo5tC2NrDZzqCsg09DXuxm1FVlm1Nbyvb/LRUMdXKN73HMacx1v4pUzqdnfi6E7uOqeq3OfpOmSO1UtVkxh4ELcuFc8VXptEGixvnqv8B9nffuTVSGcyrxSTgTjs3/dxAWCX5tdum50/ILcI0vpT8YWe52YctH8S8Yh5uVeRG1Wm+crT+zyVatapje1b9hh/VUCUPRfEzKdroMyZRmXiWPNdpTQ7VKHSvCrJfbWtoM6XoJxv98YfRhO+Kq448+ivkj5JzfIya0+1wuDXR43ne3Ld27fqn9Qd9kUB9uoancwAAAABJRU5ErkJggg",
      img_galeria:'https://ebookbazaar.com/img//author/HF0R5B_212328-200.png',
      img_chat:'https://cdn4.iconfinder.com/data/icons/election-and-voting/50/31-512.png',
    }
  }

}
