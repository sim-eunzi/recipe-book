import { useAtomValue, useSetAtom } from 'jotai';
import { categoriesAtom, updateCategoriesAtom } from '../store';
import Category from './category';

const CategoryList = () => {
  const categories = useAtomValue(categoriesAtom);
  const updateCategorie = useSetAtom(updateCategoriesAtom);

  return (
    <>
      {categories.map((category) => (
        <Category
          category={category}
          key={category.idCategory}
          onClick={(idCategory) => updateCategorie(idCategory)}
        />
      ))}
    </>
  );
};

export default CategoryList;
