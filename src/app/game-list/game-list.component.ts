import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  newTitle:string = '';
  newYear:number = 0;
  newConsole = false;

  constructor(public GameServ:GameService) {}

  deleteEvent(TheGame:Game){
    for(let i = 0; i < this.GameServ.get().length;i++){
      if(this.GameServ.get()[i] === TheGame){
        this.GameServ.get().splice(i,1);
        return;
      }
    }
  }


  addGame(){
    this.GameServ.get().push({
      title:this.newTitle,year:this.newYear,console:this.newConsole
    });
  }



  ngOnInit(): void {
  }

}
