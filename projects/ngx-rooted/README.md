# NgxRooted

 [angular tree component_Demo]()

This is an Angular Tree View library that helps to display nested and hierarchical data in a tree-like structure. The library is useful for organizing and visualizing complex data sets, such as geographic locations, file systems, or categorizations

## Installation

```bash
npm i ngx-rooted-tree
```

## Getting started

```
import {  NgxRootedModule} from 'ngx-rooted-tree';

@NgModule({
  declarations: [AppComponent],
  imports: [NgxRootedModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

In template use ngx-rooted  component with your options

```
 <ngx-rooted  [nodes]="treeList" [currentLang]="currentLang" (onNodeSelected)="onSelectNode($event)">
</ngx-rooted>

```

`onNodeSelected ==> custom eventEmitter`

Type accept

```
interface RootTree {
    id: number;
    localeName: string;
    enName: string;
    type: string;
    level: number;
    hasDeductibleBalance?: boolean;
    children: RootTree[];
    numberOfMainChild: number;
    numberOfBranchChild: number;
  }
```
