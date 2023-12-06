import type { Schema, Attribute } from '@strapi/strapi';

export interface CtoItem extends Schema.Component {
  collectionName: 'components_cto_items';
  info: {
    displayName: 'item';
    icon: 'align-justify';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.String & Attribute.Required;
  };
}

export interface FaqItem extends Schema.Component {
  collectionName: 'components_faq_items';
  info: {
    displayName: 'item';
    icon: 'align-left';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.RichText & Attribute.Required;
    uuid: Attribute.String & Attribute.Required & Attribute.DefaultTo<'a'>;
  };
}

export interface HeroSliderItem extends Schema.Component {
  collectionName: 'components_hero_slider_items';
  info: {
    displayName: 'item';
    icon: 'align-right';
    description: '';
  };
  attributes: {
    subTitle: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY!'>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'We Make The Best IT Solutions'>;
    shortDec: Attribute.Text &
      Attribute.DefaultTo<'We are leading technology solutions providing company all over the world doing over 40 years. Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor.'>;
    btnText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Get Started'>;
    btnLink: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'/contact'>;
    image: Attribute.Media & Attribute.Required;
    Website: Attribute.Blocks;
  };
}

export interface PartnersItem extends Schema.Component {
  collectionName: 'components_partners_items';
  info: {
    displayName: 'item';
    icon: 'align-right';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    link: Attribute.String & Attribute.DefaultTo<'#'>;
  };
}

export interface PriceListsItem extends Schema.Component {
  collectionName: 'components_price_lists_items';
  info: {
    displayName: 'item';
    icon: 'align-left';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

export interface PricingCardItem extends Schema.Component {
  collectionName: 'components_pricing_card_items';
  info: {
    displayName: 'item';
    icon: 'align-left';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Startup'>;
    price: Attribute.String & Attribute.Required & Attribute.DefaultTo<'$19'>;
    duration: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'/ month'>;
    shortText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consetetur sadi scing elitr sed diam nonumy eirmod.'>;
    priceList: Attribute.Component<'price-lists.item', true>;
    btnText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Choose Plan'>;
    btnLink: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'/contact'>;
  };
}

export interface SingleImgItem extends Schema.Component {
  collectionName: 'components_single_img_items';
  info: {
    displayName: 'item';
    icon: 'align-left';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface TeamItem extends Schema.Component {
  collectionName: 'components_team_items';
  info: {
    displayName: 'item';
    icon: 'align-right';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    designation: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    socialIcon1: Attribute.String & Attribute.DefaultTo<'ri-facebook-fill'>;
    socialLink1: Attribute.String;
    socialIcon2: Attribute.String & Attribute.DefaultTo<'ri-facebook-fill'>;
    socialLink2: Attribute.String;
    socialIcon3: Attribute.String;
    socialLink3: Attribute.String;
  };
}

export interface TestimonialsStyle1Item extends Schema.Component {
  collectionName: 'components_testimonials_style1_items';
  info: {
    displayName: 'item';
    icon: 'align-left';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Herry Hopper'>;
    designation: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Solit Team'>;
    feedbackText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consetetur sadips cin go elitr sed diam nonumy eirmod.'>;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface TestimonialsStyle2Item extends Schema.Component {
  collectionName: 'components_testimonials_style2_items';
  info: {
    displayName: 'item';
    icon: 'align-left';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    designation: Attribute.String & Attribute.Required;
    rating1: Attribute.String & Attribute.DefaultTo<'ri-star-fill'>;
    rating2: Attribute.String & Attribute.DefaultTo<'ri-star-fill'>;
    rating3: Attribute.String & Attribute.DefaultTo<'ri-star-fill'>;
    rating4: Attribute.String & Attribute.DefaultTo<'ri-star-fill'>;
    rating5: Attribute.String & Attribute.DefaultTo<'ri-star-line'>;
    feedbackText: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface WhyChooseUsItem extends Schema.Component {
  collectionName: 'components_why_choose_us_items';
  info: {
    displayName: 'item';
    icon: 'align-justify';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.'>;
    image: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cto.item': CtoItem;
      'faq.item': FaqItem;
      'hero-slider.item': HeroSliderItem;
      'partners.item': PartnersItem;
      'price-lists.item': PriceListsItem;
      'pricing-card.item': PricingCardItem;
      'single-img.item': SingleImgItem;
      'team.item': TeamItem;
      'testimonials-style1.item': TestimonialsStyle1Item;
      'testimonials-style2.item': TestimonialsStyle2Item;
      'why-choose-us.item': WhyChooseUsItem;
    }
  }
}
