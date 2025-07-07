import { useDispatch, useSelector } from 'react-redux';

import styles from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';


export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={styles.container}>
      <label htmlFor="search">
        Find contacts by name
      <input id="search" value={filter} onChange={(e) => dispatch(changeFilter(e.target.value))} />
    </label>
    </div>
  );
}
