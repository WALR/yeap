import { Injectable } from '@angular/core';

@Injectable()
export class LogrosService {

  constructor() { }


  all(): ILogro[]{
    return [
      {
        id: 1,
        title: "Cambio service primer logro asda sda sda sdasdknas dnkashdas",
        description: "loremasdasd as,d amsdnasd asdja dasdasdasdasd as da sd as das dasd asdasd as dasda sdasdasd"
      },
      {
        id: 2,
        title: "segundo logro asdasdasd",
        description: "loremasdasd as,d amsdnasd asdja dasd asdas dasd as das dasdasda sd asd asd asd asdasdasdasd"
      },
      {
        id: 3,
        title: "tercer logro asdas dasdasd asdasdasd",
        description: "loremasdasd as,d amsdnasd asdja dasd asdas dasd asd asd asd asd asda sd asdasdas dasd"
      }
    ]
  }
}

export interface ILogro{
  id: number;
  title: string;
  description?: string;
}
