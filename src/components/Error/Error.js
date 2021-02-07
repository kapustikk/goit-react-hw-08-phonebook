import PropTypes from 'prop-types';
import errorImg from '../../images/grumpyCat.jpg';
import s from '../Error/Error.module.css';

export default function Error({ message }) {
  return (
    <>
      <img src={errorImg} alt="error" className={s.errorImage} />
      <p text={message}>{message}</p>
    </>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
