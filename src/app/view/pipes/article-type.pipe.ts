import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articleType'
})
export class ArticleTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let name = "";
    if(value.good == true){
      name = "精华"
    }else{
      switch(value.tab) {
        case "ask": name = "问答"; break;
        case "share": name = "分享"; break;
        case "job": name = "招聘"; break;
        default: name="未知"
      }
    }
    return name;
  }

}
