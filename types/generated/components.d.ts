import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsAwards extends Struct.ComponentSchema {
  collectionName: 'components_about_us_awards';
  info: {
    displayName: 'Awards';
  };
  attributes: {
    AwardsList: Schema.Attribute.Component<'about-us.awards-list', true>;
    Description: Schema.Attribute.Text;
    ShowMoreLink: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsAwardsList extends Struct.ComponentSchema {
  collectionName: 'components_about_us_awards_lists';
  info: {
    displayName: 'AwardsList';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsCorporateSocial extends Struct.ComponentSchema {
  collectionName: 'components_about_us_corporate_socials';
  info: {
    displayName: 'CorporateSocial';
  };
  attributes: {
    CorporateSocialCards: Schema.Attribute.Component<
      'about-us.corporate-social-cards',
      true
    >;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsCorporateSocialCards extends Struct.ComponentSchema {
  collectionName: 'components_about_us_corporate_social_cards';
  info: {
    displayName: 'CorporateSocialCards';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    LinkText: Schema.Attribute.String;
    LinkUrl: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsInfoStrip extends Struct.ComponentSchema {
  collectionName: 'components_about_us_info_strips';
  info: {
    description: '';
    displayName: 'InfoStrip';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
  };
}

export interface AboutUsLeadersList extends Struct.ComponentSchema {
  collectionName: 'components_about_us_leaders_lists';
  info: {
    displayName: 'LeadersList';
  };
  attributes: {
    Category: Schema.Attribute.Enumeration<
      ['Board of Directors', 'Key Management Person']
    >;
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsLeadersSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_leaders_sections';
  info: {
    displayName: 'LeadersSection';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    LeadersList: Schema.Attribute.Component<'about-us.leaders-list', true>;
    LinkUrl: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsMediaCard extends Struct.ComponentSchema {
  collectionName: 'components_about_us_media_cards';
  info: {
    displayName: 'MediaCard';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    LinkUrl: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsMediaCenter extends Struct.ComponentSchema {
  collectionName: 'components_about_us_media_centers';
  info: {
    displayName: 'MediaCenter';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    MediaCard: Schema.Attribute.Component<'about-us.media-card', true>;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsMilestone extends Struct.ComponentSchema {
  collectionName: 'components_about_us_milestones';
  info: {
    displayName: 'Milestone';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    MilestoneList: Schema.Attribute.Component<'about-us.milestone-list', true>;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsMilestoneList extends Struct.ComponentSchema {
  collectionName: 'components_about_us_milestone_lists';
  info: {
    displayName: 'MilestoneList';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    Year: Schema.Attribute.String;
  };
}

export interface AboutUsPartners extends Struct.ComponentSchema {
  collectionName: 'components_about_us_partners';
  info: {
    description: '';
    displayName: 'Partners';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    PartnerCard1: Schema.Attribute.Component<'about-us.partners-card', false>;
    PartnersCard2: Schema.Attribute.Component<'about-us.partners-card', false>;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsPartnersCard extends Struct.ComponentSchema {
  collectionName: 'components_about_us_partners_cards';
  info: {
    displayName: 'PartnersCard';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    LinkUrl: Schema.Attribute.String;
  };
}

export interface AboutUsPrincipleCard extends Struct.ComponentSchema {
  collectionName: 'components_about_us_principle_cards';
  info: {
    displayName: 'PrincipleCard';
  };
  attributes: {
    Category: Schema.Attribute.String;
    PrincipleList: Schema.Attribute.Component<'about-us.principle-list', true>;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsPrincipleList extends Struct.ComponentSchema {
  collectionName: 'components_about_us_principle_lists';
  info: {
    displayName: 'PrincipleList';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsPrinciples extends Struct.ComponentSchema {
  collectionName: 'components_about_us_principles';
  info: {
    displayName: 'Principles';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    PrincipleCard: Schema.Attribute.Component<'about-us.principle-card', true>;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsReportItems extends Struct.ComponentSchema {
  collectionName: 'components_about_us_report_items';
  info: {
    displayName: 'ReportItems';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    LinkUrl: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsReports extends Struct.ComponentSchema {
  collectionName: 'components_about_us_reports';
  info: {
    displayName: 'Reports';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    ReportItems: Schema.Attribute.Component<'about-us.report-items', true>;
    Title: Schema.Attribute.String;
  };
}

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

export interface CommonIrdaSection extends Struct.ComponentSchema {
  collectionName: 'components_common_irda_sections';
  info: {
    displayName: 'IrdaSection';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    LeftText: Schema.Attribute.Blocks;
    RightText: Schema.Attribute.Blocks;
  };
}

export interface CommonReviewCards extends Struct.ComponentSchema {
  collectionName: 'components_common_review_cards';
  info: {
    description: '';
    displayName: 'ReviewCards';
  };
  attributes: {
    Category: Schema.Attribute.Enumeration<
      ['General', 'Investment', 'Claims', 'Returns']
    >;
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

export interface HomePageCallBack extends Struct.ComponentSchema {
  collectionName: 'components_home_page_call_backs';
  info: {
    displayName: 'CallBack';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface HomePageCardList extends Struct.ComponentSchema {
  collectionName: 'components_home_page_card_lists';
  info: {
    description: '';
    displayName: 'CardList';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    Text: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

export interface HomePageChooseGoal extends Struct.ComponentSchema {
  collectionName: 'components_home_page_choose_goals';
  info: {
    displayName: 'ChooseGoal';
  };
  attributes: {
    CardList: Schema.Attribute.Component<'home-page.card-list', true>;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface HomePageCoverageCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_coverage_cards';
  info: {
    displayName: 'CoverageCard';
  };
  attributes: {
    Brand: Schema.Attribute.String;
    Category: Schema.Attribute.Enumeration<
      ['Featured', 'Term', 'Saving', 'ULIP', 'Group', 'Retirement']
    >;
    Description: Schema.Attribute.Text;
    KnowMoreLink: Schema.Attribute.String;
    MostPopular: Schema.Attribute.Boolean;
    Pointers: Schema.Attribute.Blocks;
    TalkToAdvisorLink: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface HomePageCoverageOptions extends Struct.ComponentSchema {
  collectionName: 'components_home_page_coverage_options';
  info: {
    displayName: 'CoverageOptions';
  };
  attributes: {
    CoverageCard: Schema.Attribute.Component<'home-page.coverage-card', true>;
    Title: Schema.Attribute.String;
  };
}

export interface HomePageFeatureList extends Struct.ComponentSchema {
  collectionName: 'components_home_page_feature_lists';
  info: {
    displayName: 'FeatureList';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface HomePageLifeInsurance extends Struct.ComponentSchema {
  collectionName: 'components_home_page_life_insurances';
  info: {
    description: '';
    displayName: 'LifeInsurance';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    FeatureList: Schema.Attribute.Component<'home-page.feature-list', true>;
    Title: Schema.Attribute.Text;
  };
}

export interface HomePageStartProtecting extends Struct.ComponentSchema {
  collectionName: 'components_home_page_start_protectings';
  info: {
    displayName: 'StartProtecting';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    StartProtectingCard: Schema.Attribute.Component<
      'home-page.start-protecting-card',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface HomePageStartProtectingCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_start_protecting_cards';
  info: {
    displayName: 'StartProtectingCard';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    LinkText: Schema.Attribute.String;
    LinkUrl: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface HomePageTypeInsurance extends Struct.ComponentSchema {
  collectionName: 'components_home_page_type_insurances';
  info: {
    displayName: 'TypeInsurance';
  };
  attributes: {
    CardList: Schema.Attribute.Component<'home-page.card-list', true>;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface HomePageWhatIs extends Struct.ComponentSchema {
  collectionName: 'components_home_page_what_is';
  info: {
    displayName: 'WhatIs';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface HomePageWhatStage extends Struct.ComponentSchema {
  collectionName: 'components_home_page_what_stages';
  info: {
    description: '';
    displayName: 'WhatStage';
  };
  attributes: {
    CardList: Schema.Attribute.Component<'home-page.card-list', true>;
    Title: Schema.Attribute.Text;
  };
}

export interface HomePageWhyLife extends Struct.ComponentSchema {
  collectionName: 'components_home_page_why_lives';
  info: {
    displayName: 'WhyLife';
  };
  attributes: {
    ButtonLink1: Schema.Attribute.String;
    ButtonLink2: Schema.Attribute.String;
    ButtonText1: Schema.Attribute.String;
    ButtonText2: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.awards': AboutUsAwards;
      'about-us.awards-list': AboutUsAwardsList;
      'about-us.corporate-social': AboutUsCorporateSocial;
      'about-us.corporate-social-cards': AboutUsCorporateSocialCards;
      'about-us.info-strip': AboutUsInfoStrip;
      'about-us.leaders-list': AboutUsLeadersList;
      'about-us.leaders-section': AboutUsLeadersSection;
      'about-us.media-card': AboutUsMediaCard;
      'about-us.media-center': AboutUsMediaCenter;
      'about-us.milestone': AboutUsMilestone;
      'about-us.milestone-list': AboutUsMilestoneList;
      'about-us.partners': AboutUsPartners;
      'about-us.partners-card': AboutUsPartnersCard;
      'about-us.principle-card': AboutUsPrincipleCard;
      'about-us.principle-list': AboutUsPrincipleList;
      'about-us.principles': AboutUsPrinciples;
      'about-us.report-items': AboutUsReportItems;
      'about-us.reports': AboutUsReports;
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
      'common.irda-section': CommonIrdaSection;
      'common.review-cards': CommonReviewCards;
      'common.review-section': CommonReviewSection;
      'contact-us.app-link': ContactUsAppLink;
      'contact-us.contact-cards': ContactUsContactCards;
      'contact-us.cs-category': ContactUsCsCategory;
      'contact-us.cs-item': ContactUsCsItem;
      'contact-us.customer-service': ContactUsCustomerService;
      'contact-us.visit-us': ContactUsVisitUs;
      'home-page.call-back': HomePageCallBack;
      'home-page.card-list': HomePageCardList;
      'home-page.choose-goal': HomePageChooseGoal;
      'home-page.coverage-card': HomePageCoverageCard;
      'home-page.coverage-options': HomePageCoverageOptions;
      'home-page.feature-list': HomePageFeatureList;
      'home-page.life-insurance': HomePageLifeInsurance;
      'home-page.start-protecting': HomePageStartProtecting;
      'home-page.start-protecting-card': HomePageStartProtectingCard;
      'home-page.type-insurance': HomePageTypeInsurance;
      'home-page.what-is': HomePageWhatIs;
      'home-page.what-stage': HomePageWhatStage;
      'home-page.why-life': HomePageWhyLife;
    }
  }
}
