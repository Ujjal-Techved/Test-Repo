import type { Schema, Struct } from '@strapi/strapi';

export interface BranchcardsInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_branchcards_info_cards';
  info: {
    description: '';
    displayName: 'InfoCard';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
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

export interface CareersBannerStats extends Struct.ComponentSchema {
  collectionName: 'components_careers_banner_stats';
  info: {
    description: '';
    displayName: 'BannerStats';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface CareersBenefits extends Struct.ComponentSchema {
  collectionName: 'components_careers_benefits';
  info: {
    displayName: 'Benefits';
  };
  attributes: {
    BenefitsCards: Schema.Attribute.Component<'careers.benefits-cards', true>;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface CareersBenefitsCards extends Struct.ComponentSchema {
  collectionName: 'components_careers_benefits_cards';
  info: {
    displayName: 'BenefitsCards';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface CareersFeatureListItem extends Struct.ComponentSchema {
  collectionName: 'components_careers_feature_list_items';
  info: {
    description: '';
    displayName: 'FeatureList';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface CareersJobRoleList extends Struct.ComponentSchema {
  collectionName: 'components_careers_job_role_lists';
  info: {
    description: '';
    displayName: 'JobRoleList';
  };
  attributes: {
    Role: Schema.Attribute.String;
  };
}

export interface CareersJoinCulture extends Struct.ComponentSchema {
  collectionName: 'components_careers_join_cultures';
  info: {
    description: '';
    displayName: 'JoinCulture';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    FeatureList: Schema.Attribute.Component<'careers.feature-list-item', true>;
    SliderSection: Schema.Attribute.Component<'careers.slider-section', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CareersSendApplication extends Struct.ComponentSchema {
  collectionName: 'components_careers_send_applications';
  info: {
    displayName: 'SendApplication';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    LinkText: Schema.Attribute.String;
    LinkUrl: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface CareersSliderSection extends Struct.ComponentSchema {
  collectionName: 'components_careers_slider_sections';
  info: {
    description: '';
    displayName: 'SliderSection';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
  };
}

export interface CareersValueCardItem extends Struct.ComponentSchema {
  collectionName: 'components_careers_value_card_items';
  info: {
    description: '';
    displayName: 'ValueCards';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface CareersValuesSection extends Struct.ComponentSchema {
  collectionName: 'components_careers_values_sections';
  info: {
    description: '';
    displayName: 'ValuesSection';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
    ValueCards: Schema.Attribute.Component<'careers.value-card-item', true>;
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

export interface CommonReviewCards extends Struct.ComponentSchema {
  collectionName: 'components_common_review_cards';
  info: {
    displayName: 'ReviewCards';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    Name: Schema.Attribute.String;
    Rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    Review: Schema.Attribute.Text;
  };
}

export interface CommonReviewSection extends Struct.ComponentSchema {
  collectionName: 'components_common_review_sections';
  info: {
    description: '';
    displayName: 'ReviewSection';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    ReviewCards: Schema.Attribute.Component<'common.review-cards', true>;
    Title: Schema.Attribute.String;
  };
}

export interface ContactUsAppLink extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_app_links';
  info: {
    description: '';
    displayName: 'AppLink';
  };
  attributes: {
    AppStore_Image: Schema.Attribute.Media<'images'>;
    AppStore_Link: Schema.Attribute.String;
    Description: Schema.Attribute.String;
    PlayStore_Image: Schema.Attribute.Media<'images'>;
    PlayStore_Link: Schema.Attribute.String;
    QR_Code_Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface ContactUsContactCards extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_contact_cards';
  info: {
    description: '';
    displayName: 'ContactCards';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Description_Contact: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
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
    Image: Schema.Attribute.Media<'images'>;
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
    description: '';
    displayName: 'VisitUs';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
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
      'careers.banner-stats': CareersBannerStats;
      'careers.benefits': CareersBenefits;
      'careers.benefits-cards': CareersBenefitsCards;
      'careers.feature-list-item': CareersFeatureListItem;
      'careers.job-role-list': CareersJobRoleList;
      'careers.join-culture': CareersJoinCulture;
      'careers.send-application': CareersSendApplication;
      'careers.slider-section': CareersSliderSection;
      'careers.value-card-item': CareersValueCardItem;
      'careers.values-section': CareersValuesSection;
      'common.faq-items': CommonFaqItems;
      'common.faq-section': CommonFaqSection;
      'common.review-cards': CommonReviewCards;
      'common.review-section': CommonReviewSection;
      'contact-us.app-link': ContactUsAppLink;
      'contact-us.contact-cards': ContactUsContactCards;
      'contact-us.cs-category': ContactUsCsCategory;
      'contact-us.cs-item': ContactUsCsItem;
      'contact-us.customer-service': ContactUsCustomerService;
      'contact-us.visit-us': ContactUsVisitUs;
    }
  }
}
