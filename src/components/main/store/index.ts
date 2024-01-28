import { atom } from 'jotai';
import { CategoryType, getCategories } from '../../../apis/category';
import { RecipeType, getRecipeList } from '../../../apis/recipe';

export type CategoryViewType = CategoryType & {
  selected?: boolean;
};

export type FilterType = 'new' | 'asc' | 'desc';

export const categoriesAtom = atom<CategoryViewType[]>([]);
export const recipesAtom = atom<RecipeType[]>([]);
export const selectedFilterAtom = atom<FilterType>('new');
export const selectedGridAtom = atom<2 | 4>(2);

// 카테고리 초기화
export const initCategoriesAtom = atom(null, async (get, set) => {
  try {
    const categories = await getCategories();
    set(
      categoriesAtom,
      categories.map((category, index) => {
        return {
          ...category,
          selected: index === 0 ? true : false,
        };
      }),
    );
  } catch (e) {
    set(categoriesAtom, []);
  }
});

// 레시피 초기화
export const initRecipesAtom = atom(
  null,
  async (get, set, categories: string[]) => {
    try {
      const recipes = await Promise.all(
        categories.map(async (category) => {
          return getRecipeList(category);
        }),
      );

      const flattenedRecipes = recipes.flat(); // 각 카테고리에서 반환된 배열을 펼침
      set(recipesAtom, flattenedRecipes);
    } catch (e) {
      set(recipesAtom, []);
    } finally {
      // 필터 초기화
      set(updateSelectedFilterAtom, 'new');
    }
  },
);

// 필터 업데이트
export const updateSelectedFilterAtom = atom(
  null,
  async (get, set, filter: FilterType) => {
    set(selectedFilterAtom, filter);
  },
);

// 카테고리 업데이트
export const updateCategoriesAtom = atom(null, async (get, set, idCategory) => {
  const prevCategories = get(categoriesAtom);

  set(
    categoriesAtom,
    prevCategories.map((prevCategory) => {
      if (prevCategory.idCategory === idCategory) {
        return {
          ...prevCategory,
          selected: !prevCategory.selected,
        };
      }
      return prevCategory;
    }),
  );
});

// 선택된 카테고리
export const selectedCategoryAtom = atom((get) => {
  return get(categoriesAtom)
    .filter((category) => category.selected)
    .map((category) => category.strCategory);
});

export const sortedRecipesAtom = atom((get) => {
  const selectedFilter = get(selectedFilterAtom);
  const recipes = get(recipesAtom);

  if (selectedFilter === 'new') {
    return recipes.sort((a, b) => parseInt(b.idMeal) - parseInt(a.idMeal));
  } else if (selectedFilter == 'asc') {
    return recipes.slice().sort((a, b) => a.strMeal.localeCompare(b.strMeal));
  } else if (selectedFilter === 'desc') {
    return recipes.slice().sort((a, b) => b.strMeal.localeCompare(a.strMeal));
  } else {
    return recipes;
  }
});
