import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
@Component({
  selector: 'spinner',
  templateUrl: './wait.component.html' ,
  styleUrls: ['./wait.component.scss']
})
export class WaitComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

}