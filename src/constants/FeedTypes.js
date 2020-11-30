// @flow strict

export type FeedCardType = 'Restaurant' | 'Product';

export type Address = {
  latitude: number,
  longitude: number,
  streetLine: string,
};

export type Rating = {
  ID: number,
  rating?: number,
  product?: Product,
  comment?: string,
};

export type Product = {
  ID: number,
  name?: string,
  description?: string,
  tags?: Array<string>,
  cost?: number,
  active?: boolean,
  averageRating?: number,
  ratings?: Array<Rating>,
  distance?: number,
  image?: string,
  __typename?: FeedCardType,
};

export type Restaurant = {
  ID: number,
  name?: string,
  description?: string,
  distance?: number,
  image?: string,
  address?: Address,
  tags?: Array<string>,
  products?: Array<Product>,
  __typename?: FeedCardType,
};

export type FeedCard = Product | Restaurant;

export type FeedItem = {
  name: string,
  cards: Array<FeedCard>,
};