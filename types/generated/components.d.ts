import type { Schema, Struct } from '@strapi/strapi';

export interface BranchcardsInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_branchcards_info_cards';
  info: {
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
    displayName: 'PointerList';
  };
  attributes: {
    Text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'branchcards.info-card': BranchcardsInfoCard;
      'branchcards.pointer-list': BranchcardsPointerList;
    }
  }
}
