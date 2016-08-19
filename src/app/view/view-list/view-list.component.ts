import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../api/data-service.service'
@Component({
  moduleId: module.id,
  selector: 'app-view-list',
  templateUrl: 'view-list.component.html',
  styleUrls: ['view-list.component.css'],
  providers: [DataServiceService]
})
export class ViewListComponent implements OnInit {
  public topics: Array<any> = [{}];
  
  constructor(private api:DataServiceService) { }
  
  ngOnInit() {
    const self = this;
    this.api.getTopicList()
      .then(function (result) {
        self.topics = result.json().data;
    })
  }
}
