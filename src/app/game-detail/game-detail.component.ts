import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

 @Input() TheGame:Game = {title:'Test Title',year:2002,console:true}
  editing:boolean = false;
  newTitle:string = '';
  newYear:number = 0;
  newConsole = false;
  @Output() delete:EventEmitter<Game> = new EventEmitter<Game>();

  constructor() {}

  ngOnInit(): void {}

editMode(){
  this.newTitle = this.TheGame.title;
  this.newYear = this.TheGame.year;
  this.newConsole = this.TheGame.console;
  this.editing = true;
}

saveChanges(){
  this.TheGame.title = this.newTitle;
  this.TheGame.year = this.newYear;
  this.TheGame.console = this.newConsole;
  this.editing = false;
}

cancelEdit(){
  this.editing = false;
}

deletePress(){
  this.delete.emit(this.TheGame);
}


}
