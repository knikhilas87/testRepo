export enum ListType {
  ALL = 'ALL',
  Eligible = 'Eligible',
  Rejected = 'Rejected'
}
export class ApplicationForm {
   PartnerName: string;
  NoOfInsured: number;
  NoOfSeniorInsured: number;
  Revenue: number;
  Year: string;
  ListType?: ListType;
}
