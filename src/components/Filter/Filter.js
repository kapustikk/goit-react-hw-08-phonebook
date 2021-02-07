import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import * as phonebookActions from '../../redux/phonebook/phonebook-actions';
import s from '../Filter/Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(phonebookActions.changeFilter(e.target.value));

  return (
    <form className={s.form}>
      <label className={s.label}>
        Find contact by name
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={s.input}
        />
      </label>
    </form>
  );
}
