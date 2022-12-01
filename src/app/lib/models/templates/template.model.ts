export class TemplateModel {
  public templateId: number = 0;
  public category: string = '';
  public description: string = '';
  public creationDate: Date = new Date();
  public templateStatusId: number = 2;
  public pageId: number = 0;
  public name: string = '';
  public language: string = '';
  public totalParameters?: number = 0;

  constructor(init?: Partial<TemplateModel>) {
    Object.assign(this, init);
  }
}
