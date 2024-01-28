import styled from '@emotion/styled';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import {
  FilterType,
  selectedFilterAtom,
  selectedGridAtom,
  updateSelectedFilterAtom,
} from '../store';

const filterOption = [
  {
    value: 'new',
    name: '최신 등록순',
  },
  {
    value: 'asc',
    name: '알파벳 오름차순',
  },
  {
    value: 'desc',
    name: '알파벳 내림차순',
  },
];

const Filter = () => {
  const selectedFilter = useAtomValue(selectedFilterAtom);
  const updateSelectedFilter = useSetAtom(updateSelectedFilterAtom);
  const [selectedGrid, setSelectedGrid] = useAtom(selectedGridAtom);

  return (
    <FilterContainer>
      <select
        value={selectedFilter}
        onChange={(e) => {
          updateSelectedFilter(e.target.value as FilterType);
        }}
      >
        {filterOption.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>

      <select
        value={selectedGrid}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (value === 2 || value === 4) {
            setSelectedGrid(value);
          }
        }}
      >
        <option value={2}>2개씩 보기</option>
        <option value={4}>4개씩 보기</option>
      </select>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  text-align: right;
  width: 100%;
`;

export default Filter;
