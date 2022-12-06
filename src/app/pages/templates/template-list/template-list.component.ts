import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoriesModel } from '@lib/models/templates/categories.model';
import { LanguageModel } from '@lib/models/templates/language.model';
import { TemplateParamPositionModel } from '@lib/models/templates/template-param-position.model';
import { TemplateParamSectionModel } from '@lib/models/templates/template-param-section.model';
import { TemplateParamTypeModel } from '@lib/models/templates/template-param-type.model';
import { TemplateParamModel } from '@lib/models/templates/template-param.model';
import { TemplateModel } from '@lib/models/templates/template.model';
import { TemplatesService } from '@lib/services/templates/templates.service';
import { DxDataGridModule, DxPopupModule, DxScrollViewModule, DxTextAreaModule } from 'devextreme-angular';
import { DxoFormItemModule } from 'devextreme-angular/ui/nested';

@Component({
  selector: 'app-template-list',
  standalone: true,
  imports: [
    CommonModule,
    DxDataGridModule,
    DxoFormItemModule,
    DxTextAreaModule,
    DxPopupModule,
    DxScrollViewModule,
  ],
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css'],
})
export class TemplateListComponent implements OnInit {
  templates: TemplateModel[] = [];
  categories: CategoriesModel[] = [];
  languages: LanguageModel[] = [];
  templateParams: TemplateParamModel[] = [];
  templateParamSection: TemplateParamSectionModel[] = [];
  templateParamType: TemplateParamTypeModel[] = [];
  templateParamPosition: TemplateParamPositionModel[] = [];

  visibleModalParams: boolean = false;
  visibleModalInfo: boolean = false;

  templateInfo: string = '';

  constructor(private templatesService: TemplatesService) {
    this.onClickParams = this.onClickParams.bind(this);
    this.onClickInfoTemplate = this.onClickInfoTemplate.bind(this);
  }

  ngOnInit(): void {
    this.templates = this.templatesService.getTemplates();
    this.categories = this.templatesService.getCategories();
    this.languages = this.templatesService.getLanguages();
    this.templateParamType = this.templatesService.getTemplateParamType();
    this.templateParamSection = this.templatesService.getTemplateParamSection();
    this.templateParamPosition = this.templatesService.getTemplateParamPosition();
  }

  onToolbarPreparing(e: any) {
    e.toolbarOptions.items.forEach((item: any) => {
      if (item.name === 'addRowButton') {
        item.options.hint = 'Agregar template';
        item.options.text = 'Agregar template';
        item.options.icon = 'add';
        item.showText = 'always';
        item.options.stylingMode = 'contained';
        item.options.type = 'default';
        // item.options.onClick = () => {
        //   // Consultar el ultimo id
        // };
      }
    });
  }

  onClickParams({ row }: { row: any }) {
    const { templateId } = row.data as TemplateModel;
    console.log(
      '🚀 ~ file: template-list.component.ts:68 ~ TemplateListComponent ~ onClickParams ~ row.data ',
      row.data,
    );
    this.templateParams = this.templatesService
      .getTemplateParams()
      .filter((x) => x.templateId === templateId)
      .sort((a, b) => a.position - b.position);
    console.log(
      '🚀 ~ file: template-list.component.ts:69 ~ TemplateListComponent ~ onClickParams ~ this.templateParams',
      this.templateParams,
    );
    this.visibleModalParams = true;
  }

  onClickInfoTemplate({ row }: { row: any }) {
    const { description } = row.data as TemplateModel;
    this.templateInfo = description;
    this.visibleModalInfo = true;
  }
}
