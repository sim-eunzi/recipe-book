import { AxiosResponse } from 'axios';
import { get } from '../utils/axios';

export type CategoryType = {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
};

export async function getCategories(): Promise<CategoryType[] | []> {
  const response: AxiosResponse = await get('categories.php');
  const {
    data: { categories },
  } = response;

  return categories as CategoryType[];
}
