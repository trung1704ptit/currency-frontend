export interface IWrapper {
  children: any;
}

export enum Estatus {
  default = '',
  negative = '-',
  positive = '+',
}

export interface ICurrencyProps {
  pairName: string;
  price: number;
  dayChanged: number;
  dayChangedByPercent: number;
  dayChangedStatus: Estatus;
  from: string;
  to: string;
  lastUpdated: Date;
}

export type CurrencyInputType = {
  pairName: string;
};
