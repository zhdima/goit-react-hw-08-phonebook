import { FilterWrap } from './Filter.styled';
import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter } from "../../redux/contacts/selectors";
import { setNameFilter } from "../../redux/contacts/filtersSlice";

export const Filter = () => {
  const nameFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const onFilterChange = evt => dispatch(setNameFilter(evt.currentTarget.value)); 

  return (
    <FilterWrap>
      <label>
        <p>Find contacts by name</p>
        <input type="text" value={nameFilter} onChange={onFilterChange} />
      </label>
    </FilterWrap>
  );
};
