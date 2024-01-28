import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { initCategoriesAtom } from '../../components/main/store';
import CategoryList from '../../components/main/categories/category-list';
import RecipeList from '../../components/main/recipes/recipe-list';
import Filter from '../../components/main/filter/filter';

function RecipesPage() {
  const initCategories = useSetAtom(initCategoriesAtom);

  useEffect(() => {
    initCategories();
  }, []);

  return (
    <Container>
      <CategoryList />
      <Filter />
      <RecipeList />
    </Container>
  );
}

const Container = styled.div`
  max-width: 720px;
  padding: 0px;
  margin: 0 auto;
`;

export default RecipesPage;
