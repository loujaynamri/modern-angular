import { Component } from '@angular/core';

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
}
