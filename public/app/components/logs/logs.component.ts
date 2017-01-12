import { Component, OnInit } from '@angular/core';
import { FeathersService } from '../../services/feathers.service';
import { Log } from '../../Log';

@Component({
  moduleId: module.id,
  selector: 'logs',
  templateUrl: 'logs.component.html'
})
export class LogsComponent implements OnInit{
  logs: Array<Log> = [];

  constructor(private _feathersService: FeathersService) { }

  ngOnInit() {
    this._feathersService.getLogs().subscribe(logs => {
      console.log(logs);
    });
  }
}
