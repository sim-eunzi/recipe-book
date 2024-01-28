import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import { Typography } from '../../../styles/font';
import { CategoryViewType } from '../store';

interface CategoryProps {
  category: CategoryViewType;
  onClick: (idCategory: string) => void;
}

const Category: React.FC<CategoryProps> = ({ category, onClick }) => {
  const { strCategory } = category;

  return (
    <CategoryButton
      selected={category.selected}
      className={Typography.BODY_16_BOLD}
      onClick={() => onClick(category.idCategory)}
    >
      {strCategory}
    </CategoryButton>
  );
};

export const CategoryButton = styled.button<{ selected?: boolean }>`
  border-radius: 20px;
  cursor: pointer;
  padding: 8px 16px;
  margin: 0 8px 8px 0;
  color: ${colors.Gray_600};
  background-color: ${colors.Gray_200};
  border: none;

  color: ${(props) => (props.selected ? colors.White : colors.Gray_600)};
  background-color: ${(props) =>
    props.selected ? colors.Gray_900 : colors.Gray_200};
`;

export default Category;
