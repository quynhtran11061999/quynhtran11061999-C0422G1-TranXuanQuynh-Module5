import { Component, OnInit } from '@angular/core';
import {IWord} from "../../model/iword";
import {DictionaryService} from "../../service/dictionary.service";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  dictionary : IWord[]= []
  constructor(private dictionaryService: DictionaryService) {
    this.dictionary = this.dictionaryService.findAll();
  }

  ngOnInit(): void {
  }

}
