import { AxiosResponse } from 'axios';
import { get } from '../utils/axios';

export type RecipeType = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

export async function getRecipeList(
  category: string,
): Promise<RecipeType[] | []> {
  const response: AxiosResponse = await get(`filter.php?c=${category}`);
  const {
    data: { meals },
  } = response;

  return meals as RecipeType[];
}
