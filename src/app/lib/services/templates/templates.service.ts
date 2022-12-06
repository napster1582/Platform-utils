import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { CategoriesModel } from '@lib/models/templates/categories.model';
import { LanguageModel } from '@lib/models/templates/language.model';
import { TemplateParamPositionModel } from '@lib/models/templates/template-param-position.model';
import { TemplateParamSectionModel } from '@lib/models/templates/template-param-section.model';
import { TemplateParamTypeModel } from '@lib/models/templates/template-param-type.model';
import { TemplateParamModel } from '@lib/models/templates/template-param.model';
import { TemplateModel } from '@lib/models/templates/template.model';
import { NgxGenericRestService } from 'ngx-grs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemplatesService extends NgxGenericRestService {
  templates: TemplateModel[] = [];
  categories: CategoriesModel[] = [];
  languages: LanguageModel[] = [];
  templateParams: TemplateParamModel[] = [];
  templateParamSection: TemplateParamSectionModel[] = [];
  templateParamType: TemplateParamTypeModel[] = [];
  templateParamPosition: TemplateParamPositionModel[] = [];

  constructor() {
    super({
      baseUrl: environment.apiUrl,
      resourceName: 'Templates',
    });

    this.templates = [
      {
        templateId: 35,
        category: 'Alert Update',
        description: 'Hola {{1}} 👋 {{2}}',
        creationDate: new Date('2022-04-21 16:08:47.450'),
        templateStatusId: 2,
        pageId: 1028,
        name: 'notificacion_compra',
        language: 'ES_ES',
      },
      {
        templateId: 38,
        category: 'Alert Update',
        description:
          'Línea Directa tiene un mensaje especial para ti ¡Disfrútalo! Si Deseas ver el mensaje digita la opción 1\nsalto de linea',
        creationDate: new Date('2022-04-22 14:44:06.967'),
        templateStatusId: 2,
        pageId: 1460,
        name: 'general',
        language: 'ES',
      },
      {
        templateId: 3,
        category: 'Ticket Update',
        description:
          '{{1}}👋🏼 ¡Soy el asistente virtual de Unicor! Sabemos que has usado nuestro canal de Whatsapp🤳🏼  y nos gustaría conocer como ha sido tu experiencia y así nos ayudas a mejorar🤩📝 ¡Nos interesa tus comentarios!',
        creationDate: new Date('2022-04-26 13:31:29.670'),
        templateStatusId: 2,
        pageId: 886,
        name: 'calificacion1',
        language: 'ES',
      },
      {
        templateId: 4,
        category: 'Auto Reply',
        description:
          '{{1}}👋🏼 ¡Soy el asistente virtual de Unicor! Sabemos que has usado nuestro canal de Whatsapp🤳🏼  y nos gustaría conocer como ha sido tu experiencia y así nos ayudas a mejorar🤩📝 ¡Nos interesa tus comentarios!',
        creationDate: new Date('2022-04-29 13:30:56.530'),
        templateStatusId: 2,
        pageId: 886,
        name: 'evaluacion3',
        language: 'ES',
      },
      {
        templateId: 42,
        category: 'Ticket Update',
        description:
          '{{1}}👋🏼 ¡Soy el asistente virtual de Unicor! Sabemos que has usado nuestro canal de Whatsapp🤳🏼  y nos gustaría conocer como ha sido tu experiencia y así nos ayudas a mejorar🤩📝 Si quieres ayudarnos a mejorar y calificarnos favor escribe la pabra *Si*.',
        creationDate: new Date('2022-05-02 15:49:18.083'),
        templateStatusId: 2,
        pageId: 886,
        name: 'evaluacion4',
        language: 'ES',
      },
      {
        templateId: 133,
        category: 'Ticket Update',
        description:
          '_*¡Hola {{1}}!*_  _Somos Talentu_ 👋🏼, la plataforma que soporta los procesos de selección de _*{{2}}*_   _*¡Tenemos buenas noticias!*_ Has avanzado a la siguiente etapa del proceso para el cargo de _*{{3}}*_, por eso, enviamos a tu correo electrónico los detalles de tu entrevista.  En la invitación encontrarás el enlace para tu conexión en caso de ser una entrevista virtual o la dirección física en caso de ser presencial.  *Tips Talentu para entrevista virtual:*  ✅ Conéctate con 5 minutos de anticipación. ✅ Asegúrate de tener una conexión estable de Internet. ✅ Busca un lugar silencioso donde nadie te interrumpa. ✅ Usa audífonos (en lo posible).  ¡Buena suerte y hasta pronto!',
        creationDate: new Date('2022-05-02 15:49:18.083'),
        templateStatusId: 2,
        pageId: 1661,
        name: 'op_entrevista',
        language: 'ES',
      },
    ];

    this.categories = [
      {
        id: 1,
        category: 'Auto Reply',
      },
      {
        id: 2,
        category: 'Actualización de alertas',
      },
      {
        id: 3,
        category: 'Actualización de pago',
      },
      {
        id: 4,
        category: 'Alert Update',
      },
      {
        id: 5,
        category: 'Alert_Update',
      },
      {
        id: 6,
        category: 'APPOINTMENT_UPDATE',
      },
      {
        id: 7,
        category: 'Auto-Reply',
      },
      {
        id: 8,
        category: 'Category',
      },
      {
        id: 9,
        category: 'Issue Resolution',
      },
      {
        id: 10,
        category: 'Marketing',
      },
      {
        id: 11,
        category: 'Shipping Update',
      },
      {
        id: 12,
        category: 'Ticket Update',
      },
      {
        id: 13,
        category: 'Transaccional',
      },
      {
        id: 14,
        category: 'TRANSACTIONAL',
      },
    ];

    this.languages = [
      {
        language: 'ES_ES',
        name: 'Spanish (SPA) (es_ES)',
      },
      {
        language: 'ES',
        name: 'Spanish (es)',
      },
    ];

    this.templateParamSection = [
      {
        templateParameterSectionId: 1,
        code: 'HEADER',
        description: 'Sección de la cabecera del mensaje',
      },
      {
        templateParameterSectionId: 2,
        code: 'BODY',
        description: 'Sección del cuerpo del mensaje',
      },
      {
        templateParameterSectionId: 3,
        code: 'FOOTER',
        description: 'Sección del pie del mensaje',
      },
      {
        templateParameterSectionId: 4,
        code: 'BUTTONS',
        description: 'Sección de los botones del mensaje',
      },
    ];

    this.templateParamType = [
      {
        templateParameterTypeId: 1,
        code: 'TEXT',
        description: 'Parametro de tipo texto',
      },
      {
        templateParameterTypeId: 2,
        code: 'IMAGE',
        description: 'Parametro de tipo imagen (Link)',
      },
      {
        templateParameterTypeId: 3,
        code: 'DOCUMENT',
        description: 'Parametro de tipo documento (Link)',
      },
      {
        templateParameterTypeId: 4,
        code: 'VIDEO',
        description: 'Parametro de tipo video (Link)',
      },
      {
        templateParameterTypeId: 5,
        code: 'URL',
        description: 'Parametro de tipo url, solo funciona en los botones (Link)',
      },
    ];

    this.templateParams = [
      {
        templateParameterId: 'F9D936E7-8419-4099-9B97-459E76C6B78F',
        templateParameterTypeId: 1,
        templateParameterSectionId: 2,
        templateId: 133,
        position: 2,
      },
      {
        templateParameterId: '4C75CC3D-78DD-4812-82A1-A6C1666C5637',
        templateParameterTypeId: 1,
        templateParameterSectionId: 2,
        templateId: 133,
        position: 1,
      },
      {
        templateParameterId: 'C3711AB9-11F5-4F58-BFB4-AEFF913914F3',
        templateParameterTypeId: 1,
        templateParameterSectionId: 2,
        templateId: 133,
        position: 3,
      },
      {
        templateParameterId: 'A367C2CD-2551-4B41-B33D-5A60EC2E47CD',
        templateParameterTypeId: 1,
        templateParameterSectionId: 2,
        templateId: 38,
        position: 1,
      },

      {
        templateParameterId: '3C83850A-4108-4D51-BBF7-BE24846D72AA',
        templateParameterTypeId: 1,
        templateParameterSectionId: 2,
        templateId: 35,
        position: 2,
      },
      {
        templateParameterId: 'C565A8D9-E700-4B84-8094-CFF9769DF01F',
        templateParameterTypeId: 1,
        templateParameterSectionId: 2,
        templateId: 35,
        position: 1,
      },
      {
        templateParameterId: '151FF158-EAAE-43C7-B9C3-EB30576BA225',
        templateParameterTypeId: 1,
        templateParameterSectionId: 2,
        templateId: 42,
        position: 1,
      },
    ];

    this.templateParamPosition = [
      {
        position: 1,
      },
      {
        position: 2,
      },
      {
        position: 3,
      },
      {
        position: 4,
      },
      {
        position: 5,
      },
      {
        position: 6,
      },
      {
        position: 7,
      },
    ];
  }

  getTemplates() {
    return this.templates;
  }

  getCategories() {
    return this.categories;
  }
  getLanguages() {
    return this.languages;
  }

  getTemplateParams() {
    return this.templateParams;
  }

  getTemplateParamSection() {
    return this.templateParamSection;
  }

  getTemplateParamType() {
    return this.templateParamType;
  }

  getTemplateParamPosition() {
    return this.templateParamPosition;
  }

  private getAllTemplates(): Observable<TemplateModel[]> {
    return this.list<TemplateModel[]>({
      urlPostfix: 'GetAllTemplates',
      mapFn: ({ result }) => result || [],
    });
  }
  private getTemplateParams1(): Observable<TemplateParamModel[]> {
    return this.list<TemplateParamModel[]>({
      urlPostfix: 'GetParameters',
      mapFn: ({ result }) => result || [],
    });
  }
  private getTemplateParamSection1(): Observable<TemplateParamSectionModel[]> {
    return this.list<TemplateParamSectionModel[]>({
      urlPostfix: 'GetParametersSection',
      mapFn: ({ result }) => result || [],
    });
  }
  private getTemplateParamType1(): Observable<TemplateParamTypeModel[]> {
    return this.list<TemplateParamTypeModel[]>({
      urlPostfix: 'GetParametersType',
      mapFn: ({ result }) => result || [],
    });
  }
}
