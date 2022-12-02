export class TemplateParamPositionModel {
  public position: number = 0;

  constructor(init?: Partial<TemplateParamPositionModel>) {
    Object.assign(this, init);
  }
}
