export class Definition {
  type: string;
  id: number;
  sub:boolean;
  code: string;
  name: string;
  subcode: string;
  subname: string;
  

  constructor(definition) {
    this.type = definition.type;
    this.id = definition.id;
    this.sub = definition.sub;
    this.code = definition.code;
    this.name = definition.name;
    this.subcode = definition.subcode;
    this.subname = definition.subname;
  }   
}

export class DefinitionHourDetail {
  type: string;
  id: number;
  firstValue: number;
  finalValue: number;
  plainValue: number;
  sub:boolean;

  constructor(definitionDetail) {
    this.type = definitionDetail.type;
    this.id = definitionDetail.id;
    this.sub = definitionDetail.sub;
    this.firstValue = definitionDetail.firstValue;
    this.finalValue = definitionDetail.finalValue;
    this.plainValue= definitionDetail.plainValue;
  }   
}
