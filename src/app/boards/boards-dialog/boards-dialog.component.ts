import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-boards-dialog',
  templateUrl: './boards-dialog.component.html',
  styleUrls: ['./boards-dialog.component.css']
})
export class BoardsDialogComponent {

  boardForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required])
});

constructor(
    private _dialogRef: MatDialogRef<BoardsDialogComponent>,
    private _boardService: BoardService
) {}

create() {
    this._boardService.createBoard(this.boardForm.get('title')?.value);
    this._dialogRef.close();
}

close() {
    this._dialogRef.close();
}

}
