import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <FilterContainer>
      <FilterLabel htmlFor="filter">Find contact by name</FilterLabel>
      <FilterInput
        type="text"
        id="filter"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </FilterContainer>
  );
};
