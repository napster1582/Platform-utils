export class TemplateParamSectionModel {
  public templateParameterSectionId: number = 0;
  public code: string = '';
  public description: string = '';

  constructor(init?: Partial<TemplateParamSectionModel>) {
    Object.assign(this, init);
  }
}
