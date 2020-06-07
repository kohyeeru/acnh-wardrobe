import { Categories } from './categoryEnums';

export interface Clothing {
  name: string;
  imageURL: string;
  top: string;
  left: string;
}

export type Outfit = {
  [category in Categories]?: Clothing
}
