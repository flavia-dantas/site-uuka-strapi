import type { Schema, Struct } from '@strapi/strapi';

export interface HomeAbout extends Struct.ComponentSchema {
  collectionName: 'components_home_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    MissionVisionValues: Schema.Attribute.Component<
      'home.mission-vision-values',
      true
    >;
    Schedule: Schema.Attribute.Component<'home.schedule', false>;
  };
}

export interface HomeContact extends Struct.ComponentSchema {
  collectionName: 'components_home_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    ButtonLabel: Schema.Attribute.String;
    ButtonLink: Schema.Attribute.String;
    ContactList: Schema.Attribute.Component<'home.contact-list', true>;
  };
}

export interface HomeContactList extends Struct.ComponentSchema {
  collectionName: 'components_home_contact_lists';
  info: {
    displayName: 'ContactList';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface HomeHeader extends Struct.ComponentSchema {
  collectionName: 'components_home_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    ButtonLabel: Schema.Attribute.String;
    ButtonLink: Schema.Attribute.String;
  };
}

export interface HomeLeadership extends Struct.ComponentSchema {
  collectionName: 'components_home_leaderships';
  info: {
    displayName: 'Leadership';
  };
  attributes: {
    LeadershipCard: Schema.Attribute.Component<'home.leadership-card', true>;
  };
}

export interface HomeLeadershipCard extends Struct.ComponentSchema {
  collectionName: 'components_home_leadership_cards';
  info: {
    displayName: 'LeadershipCard';
  };
  attributes: {
    name: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    position: Schema.Attribute.String;
  };
}

export interface HomeMissionVisionValues extends Struct.ComponentSchema {
  collectionName: 'components_home_mission_vision_values';
  info: {
    displayName: 'MissionVisionValues';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomePartnerships extends Struct.ComponentSchema {
  collectionName: 'components_home_partnerships';
  info: {
    displayName: 'Partnerships';
  };
  attributes: {
    ButtonLabel: Schema.Attribute.String;
    ButtonLink: Schema.Attribute.String;
  };
}

export interface HomeSchedule extends Struct.ComponentSchema {
  collectionName: 'components_home_schedules';
  info: {
    displayName: 'Schedule';
  };
  attributes: {
    closureDate: Schema.Attribute.Date;
    endDate: Schema.Attribute.Date;
    startDate: Schema.Attribute.Date;
    title: Schema.Attribute.String;
  };
}

export interface HomeSupporters extends Struct.ComponentSchema {
  collectionName: 'components_home_supporters';
  info: {
    displayName: 'Supporters';
  };
  attributes: {
    SupportersCard: Schema.Attribute.Component<'home.supporters-card', true>;
  };
}

export interface HomeSupportersCard extends Struct.ComponentSchema {
  collectionName: 'components_home_supporters_cards';
  info: {
    displayName: 'SupportersCard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    TestimonialsCard: Schema.Attribute.Component<
      'home.testimonials-card',
      true
    >;
  };
}

export interface HomeTestimonialsCard extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials_cards';
  info: {
    displayName: 'TestimonialsCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    role: Schema.Attribute.Enumeration<['Mentor', 'Mentee']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.about': HomeAbout;
      'home.contact': HomeContact;
      'home.contact-list': HomeContactList;
      'home.header': HomeHeader;
      'home.leadership': HomeLeadership;
      'home.leadership-card': HomeLeadershipCard;
      'home.mission-vision-values': HomeMissionVisionValues;
      'home.partnerships': HomePartnerships;
      'home.schedule': HomeSchedule;
      'home.supporters': HomeSupporters;
      'home.supporters-card': HomeSupportersCard;
      'home.testimonials': HomeTestimonials;
      'home.testimonials-card': HomeTestimonialsCard;
    }
  }
}
