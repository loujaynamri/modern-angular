import { Component , signal} from '@angular/core';
import { __values } from 'tslib';

@Component({
  imports: [],
  selector: 'app-hello',
  styleUrl: './hello.css',
  templateUrl: './hello.html',
})
export class Hello {
  protected title='welcom to modern angular!';
  protected isDisables=false;
  protected onClick(){
    console.log('button clicked');
    this.isDisables=!this.isDisables;
  }

  protected count = signal(0);
  increateCounter(){
    //count++
    this.count.update(value => value+1);
  }
  decreaseCounter(){
    this.count.update(value => value-1);
  }
  resetCounter(){
this.count.set(0);
  }
}
