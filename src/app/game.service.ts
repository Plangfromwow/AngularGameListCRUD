import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gamesList:Game[] = [];

  constructor() { }


  get():Game[]{
    return this.gamesList;
  }
}
