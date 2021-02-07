import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import s from '../UserMenu/UserMenu.module.css';
import avatar from '../../images/kitty.png';
import Button from '@material-ui/core/Button';

export default function UserName() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <img src={avatar} alt="avatar" className={s.avatar} />
      <span className={s.text}>Welcome, {name}! </span>
      <Button
        className={s.button}
        variant="contained"
        color="primary"
        type="submit"
        size="medium"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </div>
  );
}
