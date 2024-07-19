interface Child {
    id: number;
    localeName: string;
    enName: string;
    type: string;
    inputBalanceDistributionMode?: string;
    outputBalanceDistributionMode?: string;
    level: number;
    hasDeductibleBalance?: boolean;
    children: Child[];
    numberOfMainChild: number;
    numberOfBranchChild: number;
  }
  
  export interface RootTree {
    id: number;
    localeName: string;
    enName: string;
    type: string;
    inputBalanceDistributionMode?: string;
    outputBalanceDistributionMode?: string;
    level: number;
    hasDeductibleBalance?: boolean;
    children: Child[];
    numberOfMainChild: number;
    numberOfBranchChild: number;
  }