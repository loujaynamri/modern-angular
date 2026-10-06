import { Component , computed, effect, signal} from '@angular/core';

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
  protected doubleCount=computed(()=>this.count()*2);
  protected countLog = effect(()=>{
    console.log("count changed",this.count())
  })
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
