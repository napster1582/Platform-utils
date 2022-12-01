import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoriesModel } from '@lib/models/templates/categories.model';
import { LanguageModel } from '@lib/models/templates/language.model';
import { TemplateModel } from '@lib/models/templates/template.model';
import { TemplatesService } from '@lib/services/templates/templates.service';
import { DxDataGridModule, DxTextAreaModule } from 'devextreme-angular';
import { DxiItemModule, DxoFormItemModule } from 'devextreme-angular/ui/nested';

@Component({
  selector: 'app-template-list',
  standalone: true,
  imports: [CommonModule, DxDataGridModule, DxoFormItemModule, DxTextAreaModule, DxiItemModule],
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css'],
})
export class TemplateListComponent implements OnInit {
  templates: TemplateModel[] = [];
  categories: CategoriesModel[] = [];
  languages: LanguageModel[] = [];

  constructor(private templatesService: TemplatesService) {}

  ngOnInit(): void {
    this.templates = this.templatesService.getTemplates();
    this.categories = this.templatesService.getCategories();
    this.languages = this.templatesService.getLanguages();
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
      }
    });
  }
}
