import type { Schema, Struct } from '@strapi/strapi';

export interface BranchcardsInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_branchcards_info_cards';
  info: {
    description: '';
    displayName: 'InfoCard';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    PointerList: Schema.Attribute.Component<'branchcards.pointer-list', true>;
    Title: Schema.Attribute.String;
  };
}

export interface BranchcardsPointerList extends Struct.ComponentSchema {
  collectionName: 'components_branchcards_pointer_lists';
  info: {
    description: '';
    displayName: 'PointerList';
  };
  attributes: {
    Text: Schema.Attribute.Blocks;
  };
}

export interface BranchcardsReachUsCards extends Struct.ComponentSchema {
  collectionName: 'components_branchcards_reach_us_cards';
  info: {
    displayName: 'ReachUsCards';
  };
  attributes: {
    Contact: Schema.Attribute.String;
    Description: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
    Link: Schema.Attribute.String;
    LinkText: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

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
      'branchcards.info-card': BranchcardsInfoCard;
      'branchcards.pointer-list': BranchcardsPointerList;
      'branchcards.reach-us-cards': BranchcardsReachUsCards;
      'contact-us.contact-cards': ContactUsContactCards;
      'contact-us.visit-us': ContactUsVisitUs;
    }
  }
}
