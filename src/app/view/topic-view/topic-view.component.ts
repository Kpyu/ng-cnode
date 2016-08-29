import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../api/data-service.service'
@Component({
  moduleId: module.id,
  selector: 'app-topic-view',
  templateUrl: 'topic-view.component.html',
  providers: [DataServiceService], 
  styleUrls: ['topic-view.component.css']
})
export class TopicViewComponent implements OnInit {

  constructor(private api:DataServiceService) { }

  ngOnInit() {
  }

}
