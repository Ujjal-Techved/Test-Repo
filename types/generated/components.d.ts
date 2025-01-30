import type { Schema, Struct } from '@strapi/strapi';

export interface ContactUsContactCards extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_contact_cards';
  info: {
    displayName: 'ContactCards';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Description_Contact: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    LinkText: Schema.Attribute.String;
    LinkUrl: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface ContactUsVisitUs extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_visituses';
  info: {
    displayName: 'VisitUs';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    LinkText: Schema.Attribute.String;
    LinkUrl: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact-us.contact-cards': ContactUsContactCards;
      'contact-us.visit-us': ContactUsVisitUs;
    }
  }
}
