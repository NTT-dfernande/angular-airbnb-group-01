export interface SearchResult {
  _id:           string;
  address:       Address;
  images:        Images;
  name:          string;
  price:         Price;
  review_scores: ReviewScores;
  score:         number;
  summary:       string;
 }

 export interface Address {
  country:         Country;
  country_code:    CountryCode;
  government_area: string;
  location:        Location;
  market:          Market;
  street:          Street;
  suburb:          string;
 }

 export enum Country {
  Spain = "Spain",
 }

 export enum CountryCode {
  Es = "ES",
 }

 export interface Location {
  coordinates:       number[];
  is_location_exact: boolean;
  type:              Type;
 }

 export enum Type {
  Point = "Point",
 }

 export enum Market {
  Barcelona = "Barcelona",
  Empty = "",
 }

 export enum Street {
  BARCELONACitySpain = "BARCELONA, city, Spain",
  BarcelonaATresCuadrasDeLaSagradaFliaSpain = "Barcelona, a tres cuadras de La Sagrada Flia., Spain",
  BarcelonaBARCELONASpain = "Barcelona, BARCELONA, Spain",
  BarcelonaBarcelonaSpain = "Barcelona, Barcelona, Spain",
  BarcelonaCTSpain = "Barcelona, CT, Spain",
  BarcelonaCataloniaSpain = "Barcelona, Catalonia, Spain",
  BarcelonaCatalunyaSpain = "Barcelona, Catalunya, Spain",
  BarcelonaCataluñaCataloniaSpain = "Barcelona, Cataluña, Catalonia, Spain",
  BarcelonaCataluñaSpain = "Barcelona, Cataluña, Spain",
  BarcelonaSpain = "Barcelona, Spain",
  BarceloneSpain = "Barcelone, Spain",
  ElPratDeLlobregatCatalunyaSpain = "El Prat de Llobregat, Catalunya, Spain",
  EspluguesDeLlobregatCTSpain = "Esplugues de Llobregat, CT, Spain",
  LHospitaletDeLlobregatCTSpain = "L'Hospitalet de Llobregat, CT, Spain",
  LHospitaletDeLlobregatCatalunyaSpain = "L'Hospitalet de Llobregat, Catalunya, Spain",
  LesCortsBarcelonaSpain = "Les Corts, Barcelona, Spain",
  PurpleBarcelonaCatalunyaSpain = "barcelona, Catalunya, Spain",
  StreetBarcelonaBarcelonaSpain = "Barcelona , Barcelona, Spain",
  StreetBarcelonaCatalunyaSpain = "Barcelona , Catalunya, Spain",
 }

 export interface Images {
  medium_url:     string;
  picture_url:    string;
  thumbnail_url:  string;
  xl_picture_url: string;
 }

 export interface Price {
  $numberDecimal: string;
 }

 export interface ReviewScores {
  review_scores_rating?: number;
 }
