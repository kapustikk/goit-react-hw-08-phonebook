import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import s from '../RegisterView/RegisterView.module.css';
import { toast } from 'react-toastify';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      return toast.error('Watch out sweetheart. Try again;)');
    }
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.div}>
      <h1 className={s.title}>Registration Page</h1>
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          type="name"
          name="name"
          value={name}
          onChange={handleChange}
          className={s.textField}
          color="secondary"
        />

        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className={s.textField}
          color="secondary"
        />

        <TextField
          id="filled-basic"
          label="Password"
          variant="filled"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className={s.textField}
          color="secondary"
        />

        <Button variant="contained" color="primary" type="submit" size="medium">
          Log in
        </Button>
      </form>
    </div>
  );
}
