import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-reply-list',
  templateUrl: 'reply-list.component.html',
  styleUrls: ['reply-list.component.css']
})
export class ReplyListComponent implements OnInit {
  @Input() replyList: Array<any>
  constructor() { }
  ngOnInit() {
  }

}
