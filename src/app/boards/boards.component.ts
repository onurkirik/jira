import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardsDialogComponent } from './boards-dialog/boards-dialog.component';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent {

  public boards: Board[] = [];

  constructor(
    private matDialog: MatDialog,
    private _boardService: BoardService
  ) { }

  ngOnInit(): void {
    this.getBoards();
  }

  openNewBoardDialog() {
    const dialogRef = this.matDialog.open(BoardsDialogComponent, {
      width: '500px',
    });
  }

  getBoards() {
    this.boards = this._boardService.getBoards();
    console.log(this.boards);
  }

  deleteBoard(i:number) {
    this._boardService.deleteBoard(i);
  }

}

interface Board {
  title: string;
}
