import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
})
export class ViewBoardComponent {
boardIndex: any = 0;
boardTitle: string = "";

  constructor(
    private _route: ActivatedRoute,
    public _boardService: BoardService
  ) { }

  ngOnInit(): void {
    this.boardIndex = this._route.snapshot.paramMap.get('boardIndex');
    this.boardTitle = this._boardService.boards[this.boardIndex].title;
   }

}
