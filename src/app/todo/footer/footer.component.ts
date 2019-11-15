import { SHOW } from '../show';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Output() clearAllCompletedTodoes = new EventEmitter<void>();
  @Output() setShowTodoes = new EventEmitter<number>();
  @Input() activeTodoesCount: number;
  SHOW = SHOW;

  constructor() {}

  ngOnInit() {}

  OnClickClearAllCompletedTodoes() {
    this.clearAllCompletedTodoes.emit();
  }

  OnClickSetShowTodoes(show: number) {
    this.setShowTodoes.emit(show);
  }
}
