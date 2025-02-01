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

export interface CommonFaqItems extends Struct.ComponentSchema {
  collectionName: 'components_common_faq_items';
  info: {
    displayName: 'FAQ_Items';
  };
  attributes: {
    Answer: Schema.Attribute.Text;
    Question: Schema.Attribute.String;
  };
}

export interface CommonFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_common_faq_sections';
  info: {
    description: '';
    displayName: 'FAQ_Section';
  };
  attributes: {
    Description: Schema.Attribute.String;
    FaqList: Schema.Attribute.Component<'common.faq-items', true>;
    Title: Schema.Attribute.String;
  };
}

export interface ContactUsAppLink extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_app_links';
  info: {
    displayName: 'AppLink';
  };
  attributes: {
    AppStore_Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Description: Schema.Attribute.String;
    PlayStore_Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QR_Code_Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
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

export interface ContactUsCsCategory extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_cs_categories';
  info: {
    description: '';
    displayName: 'CS_Category';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ListItem: Schema.Attribute.Component<'contact-us.cs-item', true>;
    Title: Schema.Attribute.String;
  };
}

export interface ContactUsCsItem extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_cs_items';
  info: {
    displayName: 'CS_Item';
  };
  attributes: {
    LinkText: Schema.Attribute.String;
    LinkUrl: Schema.Attribute.String;
  };
}

export interface ContactUsCustomerService extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_customer_services';
  info: {
    description: '';
    displayName: 'CustomerService';
  };
  attributes: {
    CategoryList: Schema.Attribute.Component<'contact-us.cs-category', true>;
    Description: Schema.Attribute.Text;
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
      'common.faq-items': CommonFaqItems;
      'common.faq-section': CommonFaqSection;
      'contact-us.app-link': ContactUsAppLink;
      'contact-us.contact-cards': ContactUsContactCards;
      'contact-us.cs-category': ContactUsCsCategory;
      'contact-us.cs-item': ContactUsCsItem;
      'contact-us.customer-service': ContactUsCustomerService;
      'contact-us.visit-us': ContactUsVisitUs;
    }
  }
}
