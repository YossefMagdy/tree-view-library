import { Component } from '@angular/core';
import { EgyptTreeData } from 'src/server/server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tree-view-library';
  treeData:any=EgyptTreeData;
  chosenNode:any

  onNodeSelected(event:any){
    console.log(event)
    this.chosenNode=event
  }
}
