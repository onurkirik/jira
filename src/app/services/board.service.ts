import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  public boards: Array<any> = [];
  constructor() {
    let str = localStorage.getItem('boards');
    if (str != null) {
      this.boards = JSON.parse(str);
    }
  }

  public createBoard(title: string) {
    let newBoardObject = {
      title: title,
      cards: []
    }
    this.boards.push(newBoardObject);
    localStorage.setItem('boards', JSON.stringify(this.boards));
  };

  public getBoards() {
    return this.boards;
  }

  public deleteBoard(i:number) {
    this.boards.splice(i, 1); 
    localStorage.setItem('boards', JSON.stringify(this.boards)); 
  }

}
