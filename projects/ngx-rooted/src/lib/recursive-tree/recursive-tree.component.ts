import { Component, ElementRef, EventEmitter, Input, Output, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { RootTree } from '../../core/interface/tree.model';

@Component({
  selector: 'lib-recursive-tree',
  templateUrl: './recursive-tree.component.html',
  styleUrls: ['./recursive-tree.component.scss']
})
export class RecursiveTreeComponent {
  @ViewChildren('nodeContent') nodeContents!: QueryList<ElementRef>;

  @Input() nodes: RootTree[]=[];
  @Input() nodeWidth!: number
  @Input() currentLang: string='ar';
  @Output() onNodeSelected = new EventEmitter<any>();
  prevELementId:string=''
  treeOpen:boolean=false
  nodeIndex!:number;
  openNodes: Set<number> = new Set();

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  handleChild(){
    this.treeOpen=!this.treeOpen;
  }
  selectNode(treeNode: any,i:number) {
    this.nodeIndex=i
    if (this.prevELementId) {
      const element = document.getElementById(this.prevELementId);
      if(element)
      element.classList.remove('branchClick')
    } 
    this.prevELementId = treeNode.id
    const element = document.getElementById(treeNode.id);
    if(element)
    element.classList.add('branchClick')

    this.onNodeSelected.emit(treeNode);
  }

  isNodeOpen(node: any): boolean {
    return this.openNodes.has(node.id);
  }

  toggleNode(node: any, index: number): void {
    if (this.isNodeOpen(node)) {
      this.closeNode(node, index);
    } else {
      this.openNode(node, index);
    }
  }

  openNode(node: any, index: number): void {
    this.openNodes.add(node.id);
    const nodeContent = this.nodeContents.toArray()[index].nativeElement;
    this.renderer.setStyle(nodeContent, 'height', 'auto');
  }

  closeNode(node: any, index: number): void {
    this.openNodes.delete(node.id);
    const nodeContent = this.nodeContents.toArray()[index].nativeElement;
    this.renderer.setStyle(nodeContent, 'height', '45px');
  }

}

