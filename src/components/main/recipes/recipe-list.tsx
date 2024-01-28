import { useAtomValue, useSetAtom } from 'jotai';
import {
  initRecipesAtom,
  selectedCategoryAtom,
  selectedGridAtom,
  sortedRecipesAtom,
} from '../store';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import { Typography } from '../../../styles/font';
import { layout } from '../../../styles/media-query';
import LazyImage from '../../common/lazy-image';

const RecipeList = () => {
  const selectedCategory = useAtomValue(selectedCategoryAtom);
  const initRecipes = useSetAtom(initRecipesAtom);
  const sortedRecipes = useAtomValue(sortedRecipesAtom);
  const selectedGrid = useAtomValue(selectedGridAtom);

  useEffect(() => {
    if (selectedCategory && selectedCategory.length > 0) {
      initRecipes(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <RecipeGridContainer grid={selectedGrid}>
      {sortedRecipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal}>
          <LazyImage src={recipe.strMealThumb} alt={recipe.strMeal} />
          <p className={Typography.HEAD_24_BOLD}>{recipe.strMeal}</p>
        </RecipeCard>
      ))}
    </RecipeGridContainer>
  );
};

const RecipeGridContainer = styled.div<{ grid?: number }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.grid === 2
      ? '1fr 1fr'
      : props.grid === 4
        ? '1fr 1fr 1fr 1fr'
        : '1fr'};
  row-gap: 16px;
  column-gap: 16px;
  margin-top: 32px;

  ${layout.mobile} {
    grid-template-columns: '1fr';
  }
`;

const RecipeCard = styled.div`
  width: 100%;
  border-radius: 16px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    border-radius: 16px;
  }

  &:hover {
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.16);
  }
`;

export default RecipeList;
