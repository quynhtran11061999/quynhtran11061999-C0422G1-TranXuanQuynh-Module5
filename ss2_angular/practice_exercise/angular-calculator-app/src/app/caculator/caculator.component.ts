import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  number1: number;
  number2: number;
  character: string;

  caculator(number1: number, number2: number, character: string) {
    return eval(number1 + character + number2);
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
