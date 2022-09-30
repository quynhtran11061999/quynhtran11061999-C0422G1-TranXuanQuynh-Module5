import {Injectable} from '@angular/core';
import {IWord} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionarys: IWord[] = [];
  constructor() {
    this.dictionarys = [
      {word:"Hello",mean:"Xin chào",detail:"Ngôn ngữ để Hello"},
      {word:"Country",mean:"Quốc gia",detail:"Một vùng lãnh thổ của một nước"},
      {word:"Coffee",mean:"Cà phê",detail:"Nước uống giúp tỉnh táo"},
      {word:"PC",mean:"Máy tính",detail:"Lướt web nghe nhạc và ctrl + shift + N"},
      {word:"Water",mean:"Nước",detail:"Giải khát cực mạnh"},
      {word:"Bike",mean:"Xe đạp",detail:"Di chuyển một cách khó khăn"},
      {word:"Car",mean:"Xe hơi",detail:"Giúp di chuyển nhanh hơn"},
      {word:"Trung",mean:"Chó",detail:"NGU NGU NGU"}
      ]
  }

  findAll() {
    return this.dictionarys;
  }

  findByWord(word: string) {
    for (let i = 0; i <this.dictionarys.length ; i++) {
      if (word === this.dictionarys[i].word){
        return this.dictionarys[i];
      }
    }
    return null;
  }
}
