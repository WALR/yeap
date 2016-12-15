import { Component, OnInit } from '@angular/core';
import { LogrosService, ILogro } from '../services/logros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logros: ILogro[];
  title: string = "Bienvenidos";
  
  constructor(private LogrosService: LogrosService) { }

  ngOnInit() {
    this.logros = this.LogrosService.all();
  }


}