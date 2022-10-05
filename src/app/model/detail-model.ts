export interface DetailResult {
  _id:                   string;
  access:                string;
  accommodates:          number;
  address:               Address;
  amenities:             string[];
  availability:          Availability;
  bathrooms:             NumberDecimal;
  bed_type:              string;
  bedrooms:              number;
  beds:                  number;
  calendar_last_scraped: Date;
  cancellation_policy:   string;
  cleaning_fee:          NumberDecimal;
  description:           string;
  extra_people:          NumberDecimal;
  first_review:          Date;
  guests_included:       NumberDecimal;
  host:                  Host;
  house_rules:           string;
  images:                Images;
  interaction:           string;
  last_review:           Date;
  last_scraped:          Date;
  listing_url:           string;
  maximum_nights:        string;
  minimum_nights:        string;
  name:                  string;
  neighborhood_overview: string;
  notes:                 string;
  number_of_reviews:     number;
  price:                 NumberDecimal;
  property_type:         string;
  review_scores:         ReviewScores;
  reviews:               Review[];
  room_type:             string;
  security_deposit:      NumberDecimal;
  space:                 string;
  summary:               string;
  transit:               string;
 }

 export interface Address {
  country:         string;
  country_code:    string;
  government_area: string;
  location:        Location;
  market:          string;
  street:          string;
  suburb:          string;
 }

 export interface Location {
  coordinates:       number[];
  is_location_exact: boolean;
  type:              string;
 }

 export interface Availability {
  availability_30:  number;
  availability_365: number;
  availability_60:  number;
  availability_90:  number;
 }

 export interface NumberDecimal {
  $numberDecimal: string;
 }

 export interface Host {
  host_about:                string;
  host_has_profile_pic:      boolean;
  host_id:                   string;
  host_identity_verified:    boolean;
  host_is_superhost:         boolean;
  host_listings_count:       number;
  host_location:             string;
  host_name:                 string;
  host_neighbourhood:        string;
  host_picture_url:          string;
  host_response_rate:        number;
  host_response_time:        string;
  host_thumbnail_url:        string;
  host_total_listings_count: number;
  host_url:                  string;
  host_verifications:        string[];
 }

 export interface Images {
  medium_url:     string;
  picture_url:    string;
  thumbnail_url:  string;
  xl_picture_url: string;
 }

 export interface ReviewScores {
  review_scores_accuracy:      number;
  review_scores_checkin:       number;
  review_scores_cleanliness:   number;
  review_scores_communication: number;
  review_scores_location:      number;
  review_scores_rating:        number;
  review_scores_value:         number;
 }

 export interface Review {
  _id:           string;
  comments:      string;
  date:          Date;
  listing_id:    string;
  reviewer_id:   string;
  reviewer_name: string;
 }

  export type SearchServiceRequest = {
    position :{
      lat:number;
      lng:number;
    }
  }


  const DEFAULT_DETAIL: DetailResult = {
    _id: '0',
    access: '',
    accommodates: 0,
    address: {
      country: '',
      country_code: '',
      government_area: '',
      location: {
        coordinates: [0, 0],
        is_location_exact: true,
        type: '',
      },
      market: '',
      street: '',
      suburb: ''
    },
    amenities: [],
    availability: {
      availability_30: 0,
      availability_365: 0,
      availability_60: 0,
      availability_90: 0
    },
    bathrooms: {
      $numberDecimal: ''
    },
    bed_type: '',
    bedrooms: 0,
    beds: 0,
    calendar_last_scraped: new Date(),
    cancellation_policy: '',
    cleaning_fee: {
      $numberDecimal: ''
    },
    description: '',
    extra_people: {
      $numberDecimal: ''
    },
    first_review: new Date(),
    guests_included: {
      $numberDecimal: ''
    },
    host: {
      host_about: '',
      host_has_profile_pic: false,
      host_id: '',
      host_identity_verified: false,
      host_is_superhost: false,
      host_listings_count: 0,
      host_location: '',
      host_name: '',
      host_neighbourhood: '',
      host_picture_url: '',
      host_response_rate: 0,
      host_response_time: '',
      host_thumbnail_url: '',
      host_total_listings_count: 0,
      host_url: '',
      host_verifications: []
    },
    house_rules: '',
    images: {
      medium_url: '',
      picture_url: '',
      thumbnail_url: '',
      xl_picture_url: ''
    },
    interaction: '',
    last_review: new Date(),
    last_scraped: new Date(),
    listing_url: '',
    maximum_nights: '',
    minimum_nights: '',
    name: '',
    neighborhood_overview: '',
    notes: '',
    number_of_reviews: 0,
    price: {
      $numberDecimal: ''
    },
    property_type: '',
    review_scores: {
      review_scores_accuracy: 0,
      review_scores_checkin: 0,
      review_scores_cleanliness: 0,
      review_scores_communication: 0,
      review_scores_location: 0,
      review_scores_rating: 0,
      review_scores_value: 0,
    },
    reviews: [],
    room_type: '',
    security_deposit: {
      $numberDecimal: ''
    },
    space: '',
    summary: '',
    transit: ''
  }

  export const createDefaultDetail = (): DetailResult => ({...DEFAULT_DETAIL});
