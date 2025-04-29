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
    description: '';
    displayName: 'CorporateSocialCards';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    LinkText: Schema.Attribute.String;
    LinkUrl: Schema.Attribute.String;
    Title: Schema.Attribute.Text;
  };
}

export interface AboutUsHelpingPeople extends Struct.ComponentSchema {
  collectionName: 'components_about_us_helping_people';
  info: {
    displayName: 'HelpingPeople';
  };
  attributes: {
    CornerImage: Schema.Attribute.Media<'images'>;
    Description: Schema.Attribute.Text;
    FeatureList: Schema.Attribute.Component<'home-page.feature-list', true>;
    Image1: Schema.Attribute.Media<'images'>;
    Image2: Schema.Attribute.Media<'images'>;
    Image3: Schema.Attribute.Media<'images'>;
    KnowMoreLink: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
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

export interface AboutUsJouneyCards extends Struct.ComponentSchema {
  collectionName: 'components_about_us_jouney_cards';
  info: {
    displayName: 'JouneyCards';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    SubTitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
    YearList: Schema.Attribute.Component<'about-us.year-list', true>;
  };
}

export interface AboutUsLeadersList extends Struct.ComponentSchema {
  collectionName: 'components_about_us_leaders_lists';
  info: {
    description: '';
    displayName: 'LeadersList';
  };
  attributes: {
    Category: Schema.Attribute.Enumeration<
      ['Board of Directors', 'Key Management Person']
    >;
    Description: Schema.Attribute.Text;
    FullDescription: Schema.Attribute.Text;
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
    CenterImage: Schema.Attribute.Media<'images'>;
    Description: Schema.Attribute.Text;
    PartnerCards: Schema.Attribute.Component<'about-us.partners-card', true>;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsPartnersCard extends Struct.ComponentSchema {
  collectionName: 'components_about_us_partners_cards';
  info: {
    description: '';
    displayName: 'PartnersCard';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    LinkUrl: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsPrincipleCard extends Struct.ComponentSchema {
  collectionName: 'components_about_us_principle_cards';
  info: {
    description: '';
    displayName: 'PrincipleCard';
  };
  attributes: {
    Category: Schema.Attribute.String;
    PrincipleList: Schema.Attribute.Component<'about-us.principle-list', true>;
    Title: Schema.Attribute.Text;
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

export interface AboutUsYearList extends Struct.ComponentSchema {
  collectionName: 'components_about_us_year_lists';
  info: {
    displayName: 'YearList';
  };
  attributes: {
    BoldText: Schema.Attribute.String;
    Text: Schema.Attribute.String;
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
    description: '';
    displayName: 'ReachUsCards';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    Link: Schema.Attribute.String;
    LinkText: Schema.Attribute.String;
    QRImage: Schema.Attribute.Media<'images'>;
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
    description: '';
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

export interface CommonSchemaTag extends Struct.ComponentSchema {
  collectionName: 'components_common_schema_tags';
  info: {
    displayName: 'SchemaTag';
  };
  attributes: {
    Text: Schema.Attribute.Text;
  };
}

export interface CommonSeoSection extends Struct.ComponentSchema {
  collectionName: 'components_common_seo_sections';
  info: {
    description: '';
    displayName: 'SeoSection';
  };
  attributes: {
    CanonicalTag: Schema.Attribute.Text;
    MetaDescription: Schema.Attribute.Text;
    MetaKeyword: Schema.Attribute.String;
    SchemaTag: Schema.Attribute.Component<'common.schema-tag', true>;
    TitleTag: Schema.Attribute.Text;
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

export interface ContactUsConnectSection extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_connect_sections';
  info: {
    description: '';
    displayName: 'ConnectSection';
  };
  attributes: {
    ConnectUsCards: Schema.Attribute.Component<
      'branchcards.reach-us-cards',
      true
    >;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
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
  };
}

export interface ContactUsReachOutSection extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_reach_out_sections';
  info: {
    description: '';
    displayName: 'ReachOutSection';
  };
  attributes: {
    SubTitle: Schema.Attribute.String;
    TabList: Schema.Attribute.Component<'contact-us.reach-tab-list', true>;
    Title: Schema.Attribute.String;
  };
}

export interface ContactUsReachTabList extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_reach_tab_lists';
  info: {
    description: '';
    displayName: 'ReachTabList';
  };
  attributes: {
    OptionName: Schema.Attribute.String;
    ReachUsCards: Schema.Attribute.Component<'contact-us.reach-us-cards', true>;
  };
}

export interface ContactUsReachUsCards extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_reach_us_cards';
  info: {
    displayName: 'ReachUsCards';
  };
  attributes: {
    Description1Grey: Schema.Attribute.Text;
    Description2Red: Schema.Attribute.String;
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
    description: '';
    displayName: 'CoverageCard';
  };
  attributes: {
    BadgeText: Schema.Attribute.String;
    Brand: Schema.Attribute.String;
    Category: Schema.Attribute.Enumeration<
      ['Featured', 'Term', 'Saving', 'ULIP', 'Group', 'Retirement', 'Child']
    >;
    Description: Schema.Attribute.Text;
    KnowMoreLink: Schema.Attribute.String;
    MostPopular: Schema.Attribute.Boolean;
    Pointers: Schema.Attribute.Blocks;
    ProductUIN: Schema.Attribute.String;
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
    JourneyCards: Schema.Attribute.Component<'about-us.jouney-cards', true>;
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

export interface ProductListingBenefitsList extends Struct.ComponentSchema {
  collectionName: 'components_product_listing_benefits_lists';
  info: {
    displayName: 'BenefitsList';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
  };
}

export interface ProductListingComparePlans extends Struct.ComponentSchema {
  collectionName: 'components_product_listing_compare_plans';
  info: {
    displayName: 'ComparePlans';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    PlanList: Schema.Attribute.Component<'product-listing.plan-list', true>;
    Title: Schema.Attribute.String;
  };
}

export interface ProductListingCoverageBenefits extends Struct.ComponentSchema {
  collectionName: 'components_product_listing_coverage_benefits';
  info: {
    displayName: 'CoverageBenefits';
  };
  attributes: {
    BenefitsList: Schema.Attribute.Component<
      'product-listing.benefits-list',
      true
    >;
    Category: Schema.Attribute.Enumeration<
      ['Featured', 'Term', 'Saving', 'ULIP', 'Group', 'Retirement', 'Child']
    >;
    Description: Schema.Attribute.Text;
  };
}

export interface ProductListingPlanList extends Struct.ComponentSchema {
  collectionName: 'components_product_listing_plan_lists';
  info: {
    description: '';
    displayName: 'PlanList';
  };
  attributes: {
    DeathBenefits: Schema.Attribute.Boolean;
    Description: Schema.Attribute.Text;
    IdealFor: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    MaturityBenefits: Schema.Attribute.Boolean;
    RiderLocations: Schema.Attribute.Boolean;
    TaxBenefits: Schema.Attribute.Boolean;
    Title: Schema.Attribute.String;
  };
}

export interface ProductListingPolicyList extends Struct.ComponentSchema {
  collectionName: 'components_product_listing_policy_lists';
  info: {
    displayName: 'PolicyList';
  };
  attributes: {
    Coverage: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface ProductListingPolicyTypes extends Struct.ComponentSchema {
  collectionName: 'components_product_listing_policy_types';
  info: {
    description: '';
    displayName: 'PolicyTypes';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    PolicyList: Schema.Attribute.Component<'product-listing.policy-list', true>;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.awards': AboutUsAwards;
      'about-us.awards-list': AboutUsAwardsList;
      'about-us.corporate-social': AboutUsCorporateSocial;
      'about-us.corporate-social-cards': AboutUsCorporateSocialCards;
      'about-us.helping-people': AboutUsHelpingPeople;
      'about-us.info-strip': AboutUsInfoStrip;
      'about-us.jouney-cards': AboutUsJouneyCards;
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
      'about-us.year-list': AboutUsYearList;
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
      'common.schema-tag': CommonSchemaTag;
      'common.seo-section': CommonSeoSection;
      'contact-us.app-link': ContactUsAppLink;
      'contact-us.connect-section': ContactUsConnectSection;
      'contact-us.contact-cards': ContactUsContactCards;
      'contact-us.cs-category': ContactUsCsCategory;
      'contact-us.cs-item': ContactUsCsItem;
      'contact-us.customer-service': ContactUsCustomerService;
      'contact-us.reach-out-section': ContactUsReachOutSection;
      'contact-us.reach-tab-list': ContactUsReachTabList;
      'contact-us.reach-us-cards': ContactUsReachUsCards;
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
      'product-listing.benefits-list': ProductListingBenefitsList;
      'product-listing.compare-plans': ProductListingComparePlans;
      'product-listing.coverage-benefits': ProductListingCoverageBenefits;
      'product-listing.plan-list': ProductListingPlanList;
      'product-listing.policy-list': ProductListingPolicyList;
      'product-listing.policy-types': ProductListingPolicyTypes;
    }
  }
}
