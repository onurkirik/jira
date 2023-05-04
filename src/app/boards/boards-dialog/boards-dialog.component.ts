import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-boards-dialog',
  templateUrl: './boards-dialog.component.html',
  styleUrls: ['./boards-dialog.component.css']
})
export class BoardsDialogComponent {

  boardForm = new FormGroup({
    title: new FormControl(null, [Validators.required])
  });

  constructor(
    private _dialogRef: MatDialogRef<BoardsDialogComponent>
  ) { }

  ngOnInit(): void { }

create() {

}

close() {
  this._dialogRef.close();
}

}
