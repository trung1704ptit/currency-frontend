export interface IDropdownType {
    label: string;
    defaultValue?: string
}

export interface IResult {
  from: string;
  to: string;
  amount: number;
  pairName: string;
  price: number;
  dayChanged: number;
  dayChangedByPercent: number;
  dayChangedStatus: string;
  lastUpdated: any;
}

export interface IConverter {
    data: any
}