import { ICategory } from './category';

export interface ICard {
  id: string;
  tags: ICategory[];
  image: string;
  title: string;
  description: string;
  featured: boolean;
};
