export class TemplateParamTypeModel {
  public templateParameterTypeId: number = 0;
  public code: string = '';
  public description: string = '';

  constructor(init?: Partial<TemplateParamTypeModel>) {
    Object.assign(this, init);
  }
}
