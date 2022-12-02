export class TemplateParamModel {
  public templateParameterId: string = '';
  public templateParameterTypeId: number = 0;
  public templateParameterSectionId: number = 0;
  public templateId: number = 0;
  public position: number = 0;

  constructor(init?: Partial<TemplateParamModel>) {
    Object.assign(this, init);
  }
}
