import { Injectable } from '@angular/core';
import { CategoriesModel } from '@lib/models/templates/categories.model';
import { LanguageModel } from '@lib/models/templates/language.model';
import { TemplateModel } from '@lib/models/templates/template.model';

@Injectable({
  providedIn: 'root',
})
export class TemplatesService {
  templates: TemplateModel[] = [];
  categories: CategoriesModel[] = [];
  languages: LanguageModel[] = [];

  constructor() {
    this.templates = [
      {
        templateId: 1,
        category: 'Alert Update',
        description: 'Hola {{1}} 👋 {{2}}',
        creationDate: new Date('2022-04-21 16:08:47.450'),
        templateStatusId: 2,
        pageId: 1028,
        name: 'notificacion_compra',
        language: 'ES_ES',
      },
      {
        templateId: 2,
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
        templateId: 5,
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
        templateId: 6,
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
}
