import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RootTree } from '../core/interface/tree.model';

@Component({
  selector: 'ngx-rooted',
  templateUrl:'./ngx-rooted.component.html',
  styleUrls: ['./ngx-rooted.component.scss']
})
export class NgxRootedComponent {
  @Input() nodes: RootTree[]=[];
  @Input() currentLang: string='en';
  @Input() baseTreeImg: string="https://p7.hiclipart.com/preview/339/713/177/drawing-root-tree-sketch-tree-of-life.jpg";


  @Output() onNodeSelected = new EventEmitter<any>();
  nodeWidth=337;

  prevELementId!:string
  treeOpen:boolean=false

  constructor() { }
 

  ngOnInit(): void {
  }

  handleChild(){
    this.treeOpen=!this.treeOpen
  }
  selectNode(treeNode: any) {
    this.onNodeSelected.emit(treeNode);
  }
}
